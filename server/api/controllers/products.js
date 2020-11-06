const mongoose = require("mongoose");
const PROXY_URL = require("./../../constants");
const Product = require("../models/product");
const Visitor = require("../models/visitors");

exports.products_get_letest_products = (req, res, next) => {
  let q;
  new Visitor({ date: new Date().toISOString() }).save();
  if (req.query.categorie !== undefined) q = { categorie: req.query.categorie };
  Product.find(q)
    .select("name price _id image1 image2 description date")
    .skip(parseInt(req.query.start))
    .limit(parseInt(req.query.limit))
    .sort({ date: -1 })
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            image1: doc.image1,
            image2: doc.image2,
            _id: doc._id,
            date: doc.date,
            availableColors: doc.availableColors,
            availableSizes: doc.availableSizes,
            request: {
              type: "GET",
              url: `${PROXY_URL}/products/` + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.products_get_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: "GET",
            url: `${PROXY_URL}/products`,
          },
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

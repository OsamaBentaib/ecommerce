const mongoose = require("mongoose");
const multer = require("multer");
const PROXY_URL = require("../../../constants");
const Order = require("../../models/order");
const Product = require("../../models/product");
const User = require("../../models/user");

exports.orders_get_all_orders = (req, res, next) => {
  const start = parseInt(req.params.start);
  const limit = parseInt(req.params.limit);
  Order.find()
    .skip(start)
    .limit(limit)
    .sort({ date: -1 })
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            total: doc.total,
            status: doc.status,
            quantity: doc.itemes.length,
            shippingType: doc.shippingType,
            paymentMethod: doc.paymentMethod,
            date: doc.date,
          };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
/***
 *  here we will update the order status!
 */
exports.orders_get_update_order = async (req, res, next) => {
  const status = req.body.status;
  console.log(status);
  await Order.updateOne({ _id: req.params.Id }, { status: status });
  return res.status(200).json({
    status: "updated",
  });
};
/***
 *  here we will update the product status!
 */
exports.products_get_update_product = async (req, res, next) => {
  const status = req.body.status;
  console.log(status);
  await Product.updateOne({ _id: req.params.Id }, { inStok: status });
  return res.status(200).json({
    status: "updated",
  });
};
/***
 *  Delete
 */
exports.products_get_delete_product = async (req, res, next) => {
  const id = req.params.Id;
  await Product.findByIdAndDelete(id);
  return res.status(200).json({
    message: "success!",
  });
};
exports.products_get_all_products = (req, res, next) => {
  const start = parseInt(req.params.start);
  const limit = parseInt(req.params.limit);
  Product.find()
    .skip(start)
    .limit(limit)
    .sort({ date: -1 })
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        products: docs.map((doc) => {
          return { product: doc };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
exports.users_get_all_users = (req, res, next) => {
  const start = parseInt(req.params.start);
  const limit = parseInt(req.params.limit);
  User.find()
    .skip(start)
    .limit(limit)
    .sort({ date: -1 })
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        users: docs.map((doc) => {
          return {
            username: doc.username,
            email: doc.email,
            joinedAt: doc.joinedAt,
          };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.products_create_product = (req, res, next) => {
  console.log(req.files.image1[0]);
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image1: req.files.image1[0].filename,
    image2: req.files.image1[0].filename,
    description: req.body.description,
    availableColors: JSON.parse(req.body.selectedColors),
    availableSizes: JSON.parse(req.body.selectedSizes),
    categorie: req.body.selectedCategorie,
    date: new Date().toISOString(),
    inStok: true,
  });
  product
    .save()
    .then((rest) => {
      console.log(rest);
      return res.status(201).json({ product: product });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: err });
    });
};

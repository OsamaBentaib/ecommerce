const mongoose = require("mongoose");
const PROXY_URL = require("../../constants");
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");

exports.wishlists_get_all = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Wishlist.find()
    .select("product _id")
    .populate({ path: "product", select: "name _id" })
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json({
        count: docs.length,
        wishlistItems: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            request: {
              type: "GET",
              url: `${PROXY_URL}/wishlists/` + doc._id,
            },
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

exports.wishlists_get_user_wishlist = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Wishlist.find({ user: req.userId })
    .select("product _id color size")
    .populate("product", "name image1 image2 price")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        wishlistItems: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            color: doc.color,
            size: doc.size,
            quantity: doc.quantity,
            request: {
              type: "GET",
              url: `${PROXY_URL}/wishlists/` + doc._id,
            },
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

exports.wishlist_create_or_remove_wishlist_item = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Product.findById(req.body.productId).then((product) => {
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    Wishlist.findOne({ user: req.userId, product: req.body.productId }).then(
      (checked) => {
        if (checked) {
          Wishlist.deleteOne({ user: req.userId, product: req.body.productId })
            .then((result) => {
              res.status(204).json({
                message: "Wishlist item deleted",
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
              });
            });
        } else {
          const wishlist = new Wishlist({
            _id: mongoose.Types.ObjectId(),
            quantity: req.body.quantity,
            product: req.body.productId,
            color: req.body.color,
            size: req.body.size,
            user: req.userId,
            date: new Date().toISOString(),
          });
          wishlist
            .save()
            .then((result) => {
              console.log(result);
              res.status(201).json({
                message: "wishlist Item stored",
                createdWishlist: {
                  _id: result._id,
                  product: result.product,
                },
                request: {
                  type: "GET",
                  url: `${PROXY_URL}/wishlists/` + result._id,
                },
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: err,
              });
            });
        }
      }
    );
  });
};

const mongoose = require("mongoose");
const PROXY_URL = require("../../constants");
const Cart = require("../models/cart");
const Product = require("../models/product");

exports.cart_get_all = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  const start = req.params.start;
  const limit = req.params.limit;
  Cart.find()
    .sort({ date: -1 })
    .start(start)
    .limit(limit)
    .select("product quantity _id")
    .populate("product", "name")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        cartItems: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: "GET",
              url: `${PROXY_URL}/cart/` + doc._id,
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

exports.cart_get_user_cart = (req, res, next) => {
  console.log("caled Me!");
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Cart.find({ user: req.userId })
    .select("product quantity _id color size")
    .populate("product", "name image1 image2 price")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        cartItems: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            color: doc.color,
            size: doc.size,
            request: {
              type: "GET",
              url: `${PROXY_URL}/cart/` + doc._id,
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

exports.cart_create_cart_item = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Product.findById(req.body.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      const cart = new Cart({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId,
        color: req.body.color,
        size: req.body.size,
        user: req.userId,
        date: new Date().toISOString(),
      });
      cart
        .save()
        .then((result) => {
          return res.status(201).json({
            message: "Cart Item stored",
            createdCart: {
              _id: result._id,
              product: result.product,
              quantity: result.quantity,
              color: result.color,
              size: result.size,
            },
            request: {
              type: "GET",
              url: `${PROXY_URL}/cart/` + result._id,
            },
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
exports.cart_update_cart_item = (req, res, next) => {
  const id = req.params.cartId;
  const quantity = req.body.quantity;
  Cart.update({ _id: id }, { quantity: quantity })
    .then((result) => {
      res.status(200).json({
        message: "Cart updated",
        request: {
          type: "GET",
          url: `${PROXY_URL}/cart/` + id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
exports.cart_delete_cart_item = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Cart.deleteOne({ _id: req.params.cartId })
    .then((result) => {
      res.status(204).json({
        message: "Cart deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

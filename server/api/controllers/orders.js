const mongoose = require("mongoose");
const PROXY_URL = require("../../constants");
const Order = require("../models/order");
const OrderItemes = require("../models/orderItemes");
const Product = require("../models/product");
const Address = require("../models/address");

exports.orders_get_all = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Order.find()
    .select("product quantity _id")
    .populate("product", "name")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: "GET",
              url: `${PROXY_URL}/orders/` + doc._id,
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

exports.orders_get_user_order = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Order.find({ user: req.userId })
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            total: doc.total,
            status: doc.status,
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

exports.orders_get_order = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Order.findById(req.params.orderId)
    .exec()
    .then((order) => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found",
        });
      }
      let address = {};
      Address.findById(order.address).then((res) => {
        address = res;
      });
      OrderItemes.find({ order: order._id })
        .select("product quantity color size subtotal")
        .populate("product", "name image1")
        .then((items) => {
          return res.status(200).json({
            _id: order._id,
            items: items,
            address: address,
            shippingType: order.shippingType,
            paymentMethod: order.paymentMethod,
            total: order.total,
            status: order.status,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            err: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.orders_create_order = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    address: req.body.address,
    shippingType: req.body.shippingType,
    paymentMethod: req.body.paymentMethod,
    total: req.body.total,
    status: "Being prepared",
    user: req.userId,
    date: new Date().toISOString(),
    itemes: req.body.itemes,
  });
  order
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Order stored",
        order: order,
        request: {
          type: "GET",
          url: `${PROXY_URL}/orders/` + result._id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.orders_delete_order = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: `${PROXY_URL}/orders`,
          body: { productId: "ID", quantity: "Number" },
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

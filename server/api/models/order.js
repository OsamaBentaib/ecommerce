const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  itemes: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      color: {
        type: String,
      },
      size: {
        type: String,
      },
      quantity: {
        type: String,
      },
      subtotal: {
        type: String,
      },
    },
  ],
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  shippingType: {
    type: String,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);

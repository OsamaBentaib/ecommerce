const mongoose = require('mongoose');

const orderItemesSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    color: {
        type: String,
        require: true,
    },
    size: {
        type: String,
        require: true,
    },
    quantity: {
        type: String,
        require: true,
    },
    subtotal: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('OrderItemes', orderItemesSchema);
const mongoose = require("mongoose");
const sizeSchema = mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

});
module.exports = mongoose.model('Size', sizeSchema);
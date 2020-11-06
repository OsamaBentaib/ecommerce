const mongoose = require("mongoose");
const colorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
});
module.exports = mongoose.model('Color', colorSchema);
const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    address: {
        type: String,
    },
    comment: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});
module.exports = mongoose.model('Address', addressSchema);
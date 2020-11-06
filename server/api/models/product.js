const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    availableColors: [
        {
            name: {
                type: String,
            },
            code: {
                type: String,
            }
        }
    ],
    availableSizes: [
        {
            size: {
                type: String,
            }
        }
    ],
    categorie: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        require: true,
    },
    inStok: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Product', productSchema);
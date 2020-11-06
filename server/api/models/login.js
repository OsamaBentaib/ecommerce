const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    logginedAt: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Login', loginSchema);
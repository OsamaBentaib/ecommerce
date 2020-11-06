const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Visitor", VisitorSchema);

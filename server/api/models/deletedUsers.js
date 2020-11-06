const mongoose = require("mongoose");
const DeletedProfileSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("DeletedUsers", DeletedProfileSchema);

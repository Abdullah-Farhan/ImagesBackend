const mongoose = require("mongoose");

module.exports = mongoose.model("Images",{
  image: String,
});
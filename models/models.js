var mongoose = require("mongoose");
var models = {};

var modelSchema = mongoose.Schema({
  username: String,
  data: String,
  date: {
    type: Date,
    default: Date.now
  }
});
models.Model = mongoose.model("Model", modelSchema);


module.exports = models;

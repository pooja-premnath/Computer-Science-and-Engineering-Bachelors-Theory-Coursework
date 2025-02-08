const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  score: Number,
});

const ScoresModel = mongoose.model("scores", schema);
module.exports = ScoresModel;

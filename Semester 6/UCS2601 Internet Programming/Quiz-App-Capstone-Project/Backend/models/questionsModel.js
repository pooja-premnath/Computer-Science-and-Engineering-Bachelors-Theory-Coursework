const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Question: String,
  Choice_A: String,
  Choice_B: String,
  Choice_C: String,
  Choice_D: String,
  Answer: String,
});

const QuestionsModel = mongoose.model("questions", schema);
module.exports = QuestionsModel;

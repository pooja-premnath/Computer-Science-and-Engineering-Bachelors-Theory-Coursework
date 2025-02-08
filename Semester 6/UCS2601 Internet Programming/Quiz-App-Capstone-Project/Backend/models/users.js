const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  password: String,
});

const UsersModel = mongoose.model("users", schema);
module.exports = UsersModel;

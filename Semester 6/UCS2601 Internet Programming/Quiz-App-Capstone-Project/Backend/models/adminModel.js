const mongoose = require("mongoose");

const schema = mongoose.Schema({
  password: String,
});

const AdminModel = mongoose.model("admin", schema);
module.exports = AdminModel;

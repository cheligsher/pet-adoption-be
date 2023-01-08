const mongoose = require("mongoose");

const dbUser = new mongoose.Schema({
  email: String,
  phone: Number,
  password: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model("users", dbUser)

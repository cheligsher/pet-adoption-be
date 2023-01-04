const mongoose = require("mongoose");

const dbSignUpSchema = new mongoose.Schema({
  email: String,
  phone: Number,
  password: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model("user", dbSignUpSchema)

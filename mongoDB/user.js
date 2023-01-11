const mongoose = require("mongoose");

const dbUser = new mongoose.Schema({
  email: String,
  phone: Number,
  password: String,
  firstName: String,
  lastName: String,
  isAdmin: {type: Boolean, default: false}
});

const User = mongoose.model("User", dbUser);

module.exports = User
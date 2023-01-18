const mongoose = require("mongoose");

const dbUser = new mongoose.Schema({
  email: {type: String, required: true},
  phone: Number,
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  isAdmin: {type: Boolean, default: false},
  adopted: Array,
  fostered: Array,
  saved: Array
});

const User = mongoose.model("User", dbUser);

module.exports = User
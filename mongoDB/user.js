const mongoose = require("mongoose");

const dbUser = new mongoose.Schema({
  email: {type: String, required: true, unique:true},
  phone: Number,
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  isAdmin: {type: Boolean, default: false}
});

const User = mongoose.model("User", dbUser);

module.exports = User
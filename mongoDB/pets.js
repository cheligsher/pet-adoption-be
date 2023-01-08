const mongoose = require("mongoose");

const dbPet = new mongoose.Schema({
  type: String,
  name: String,
  adoptionStatus: String,
  picture: String,
  height: Number,
  weight: Number,
  color: String,
  bio: String,
  hypoallergnic: Boolean,
  dietery: Array,
  breed: String,
});

module.exports = mongoose.model("pets", dbPet);

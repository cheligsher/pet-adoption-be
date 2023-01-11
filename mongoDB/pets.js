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

const Pet = mongoose.model('Pet', dbPet)


module.exports = Pet
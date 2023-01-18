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
  breed: String,
  adopted: String,
  fostered: String,
  saved: Array

});

dbPet.add({ dietary: String });

const Pet = mongoose.model('Pet', dbPet)


module.exports = Pet
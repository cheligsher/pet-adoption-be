const Pet = require("../mongoDB/pets");

// async await, try catch and return var

const addPet = async (newPet) => {
  try {
    console.log("addPet")
    const pet = await Pet.create(newPet);
    return pet;
  } catch (err) {
    console.log(err.message);
  }
};

const getAllPets = async () => {
  try {
    const pets = await Pet.find({});
    return pets;
  } catch (err) {
    console.log(err.message);
  }
};

const getPetById = async (id) => {
  try{
    const pet = await Pet.findById(id)
    return pet
  }catch (err){
    console.log(err.message)
  }
}

module.exports = { getAllPets, addPet, getPetById };

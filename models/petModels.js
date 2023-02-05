const Pet = require("../mongoDB/pets");

const addPet = async (newPet) => {
  try {
    console.log("addPet")
    const pet = await Pet.create(newPet);
    return pet;
  } catch (err) {
    console.log(err.message);
  }
};

const updatePet = async (newPet, petId) => {
  console.log(newPet, petId)
  try {
    const pet = await Pet.findOneAndUpdate(petId, newPet);
    console.log("petABC", pet)
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

const searchPets = async( typeOfPet ) => {
  if (typeOfPet === "Other") {
    try {
      const pets  = await Pet.find({ type: {$nin : ["Dog", "Cat"]}})
      console.log(pets)
      return pets
    } catch (err) {
      console.log(err.message)
    }
  }
  try {

    const pets  = await Pet.find({ type: typeOfPet})
    return pets
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { getAllPets, addPet, getPetById, searchPets, updatePet };

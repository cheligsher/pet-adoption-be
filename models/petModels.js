const Pet = require("../mongoDB/pets")
// async await, try catch and return var 

const addPet = async (newPet) => {
    const pet = await Pet.create(newPet)
    return pet
}

const getAllPets = () => {
    Pet.find()
}

module.exports = { getAllPets, addPet }
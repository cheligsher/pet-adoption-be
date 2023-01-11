const Pet = require("../mongoDB/pets")

const getAllPets = () => {
    Pet.find()
}

module.exports = { getAllPets }
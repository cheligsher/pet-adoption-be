const { isPetAdopted } = require("../models/usersModels");

const checkIfCanAdopt = async(req, res, next) => {
    const petId = req.params.id
    const userId = req.body.userId
    const adoptedPet = await isPetAdopted(petId, userId)
    if (adoptedPet) {
        res.status(400).send("This pet has already been adopted!");
    return;
    }

    next()
}

module.exports = {checkIfCanAdopt}
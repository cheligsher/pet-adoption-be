const express = require("express");
const { auth, checkIfAdmin } = require("../middleware/auth");
const { getAllPets, addPet, getPetById } = require("../models/petModels");
const router = express.Router();

router
  .route("/")
  .post(auth, checkIfAdmin, async (req, res) => {
    const pet = await addPet(req.body)
    res.send(pet);
  })
  .get(async (req, res) => {
    const pets = await getAllPets()
    res.send(pets);
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const petId = req.params.id
    const pet = await getPetById(petId)
    res.send(pet);
  })
  .put(auth, checkIfAdmin, async (req, res) => {
    res.send("edit pet by id (admin only)");
  });

router.post("/:id/adopt", auth, async (req, res) => {
  res.send("adopt/ foster (logged in user only)");
});

router.post("/:id/return", auth, async (req, res) => {
  res.send("return pet (logged in user only)");
});

router
  .route("/:id/save")
  .post(auth, async (req, res) => {
    res.send("save pet (logged in user only)");
  })
  .delete(auth, async (req, res) => {
    res.send("delete saved pet (logged in user only)");
  });

router.get("/user/:id", async (req, res) => {
  res.send("get pet by user's id");
});

module.exports = router;

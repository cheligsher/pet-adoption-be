const express = require("express");
const { auth, checkIfAdmin } = require("../middleware/auth");
const { upload, findFile } = require("../middleware/imagesMiddleware");
const { checkIfCanAdopt } = require("../middleware/petsMiddleware");
const { validateBody } = require("../middleware/validateBody");
const { getAllPets, addPet, getPetById } = require("../models/petModels");
const { getUserById, adoptPet, fosterPet, findPetsByUserId } = require("../models/usersModels");
const { findOneAndUpdate } = require("../mongoDB/user");
const { addPetSchema } = require("../schemas/petsSchema");
const router = express.Router();

router
  .route("/")
  .post(auth, checkIfAdmin, upload.single("picture"),validateBody(addPetSchema), findFile, async (req, res) => {
    console.log("controller")
    const pet = await addPet(req.body)
    res.send(pet);
  })
  .get(async (req, res) => {
    const pets = await getAllPets()
    res.send(pets);
  });

  // router.get("/", async(req, res)=> {
  //   const {query} = req.query;
  //   const pets = find({$regex: query})
  //   res.send(pets)
  // })

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

router.post("/:id/adopt", auth, checkIfCanAdopt, async (req, res) => {
  const petId = req.params.id
  const userId = req.body.userId
  const user = await getUserById(userId)
  const addPetToUser = await adoptPet(petId, user)
  res.send(addPetToUser);
});

router.post("/:id/foster", auth, async (req, res) => {
  const petId = req.params.id
  const userId = req.body.userId
  const user = await getUserById(userId)
  const addPetToUser = await fosterPet(petId, user)
  console.log(addPetToUser)
  res.send(addPetToUser);
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

router.get("/user/:id",
auth, 

async (req, res) => {
  const userId = req.params.id
  const pets = await findPetsByUserId(userId)
  res.send(pets);
});

module.exports = router;

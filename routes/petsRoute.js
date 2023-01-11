const express = require("express");
const { auth } = require("../middleware/auth");
const { getAllPets } = require("../models/petModels");
const router = express.Router();

router
  .route("/")
  .post(auth, async (req, res) => {
    req.body.userId;
    res.send("add pet (admin only)");
  })
  .get(async (req, res) => {
    getAllPets()
    res.send("get pets");
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send("get pet by id");
  })
  .put(auth, async (req, res) => {
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

const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    res.send("add pet (admin only)");
  })
  .get(async (req, res) => {
    res.send("get pets");
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send("get pet by id");
  })
  .put(async (req, res) => {
    res.send("edit pet by id (admin only)");
  });

router.post("/:id/adopt", async (req, res) => {
  res.send("adopt/ foster (logged in user only)");
});

router.post("/:id/return", async (req, res) => {
  res.send("return pet (logged in user only)");
});

router
  .route("/:id/save")
  .post(async (req, res) => {
    res.send("save pet (logged in user only)");
  })
  .delete(async (req, res) => {
    res.send("delete saved pet (logged in user only)");
  });

router.get("/user/:id", async (req, res) => {
  res.send("get pet by user's id");
});

module.exports = router;

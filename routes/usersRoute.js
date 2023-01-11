const express = require("express");
const router = express.Router();
const {
  passwordsMatch,
  isNewUser,
  hashPassword,
  doesUserExist,
  verifyPassword,
} = require("../middleware/usersMiddleware");
const { validateBody } = require("../middleware/validateBody");
const { loginSchema, signUpSchema } = require("../schemas/usersSchema");
const usersController = require("../controllers/usersController");
const { getUserById } = require("../models/usersModels");

router.get("/", async (req, res) => {
  res.send("GET all users (admin only)");
  // admin only route!
  //fetch from db
});

router.post(
  "/signup",
  validateBody(signUpSchema),
  passwordsMatch,
  isNewUser,
  hashPassword,
  usersController.signUp
);

router.post(
  "/login",
  validateBody(loginSchema),
  doesUserExist,
  verifyPassword,
  usersController.login
);

router
  .route("/:id")
  .get(async (req, res) => {
    getUserById(req.params.id)
    res.send("GET user by id");
  })
  .put(async (req, res) => {
    // if(email){

    // }
    res.send("Update user (logged in user only)");
    //logged in user only
  });

router.get("/:id/full", async (req, res) => {
  res.send("GET user by id");
  //what's the diff between this and ^^
});

module.exports = router;

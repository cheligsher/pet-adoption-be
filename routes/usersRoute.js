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
const usersController = require("../controllers/usersController")

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
    res.send("GET user by id");
  })
  .put(async (req, res) => {
    res.send("Update user (logged in user only)");
    //logged in user only
});

router.get("/:id/full", async (req, res) => {
  res.send("GET user by id");
});

module.exports = router;

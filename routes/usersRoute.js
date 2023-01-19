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
const { getUserById, getAllUsers, updateUser } = require("../models/usersModels");
const { auth, checkIfAdmin } = require("../middleware/auth");

router.get("/", auth, checkIfAdmin, async (req, res) => {
  const allUsers = await getAllUsers()
  res.send(allUsers);
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
    const userId = await getUserById(req.params.id)
    res.send(userId);
    
  })
  .put(auth, async (req, res) => {
    const userId = req.params.id
    const updatedUser = await updateUser(req.body, userId)
    res.send(updatedUser);
  });

module.exports = router;

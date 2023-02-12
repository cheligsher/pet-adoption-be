const express = require("express");
const bcrypt = require("bcrypt");
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
const {
  getUserById,
  getAllUsers,
  updateUser,
  getUserByEmail,
} = require("../models/usersModels");
const { auth, checkIfAdmin } = require("../middleware/auth");

router.get("/", auth, checkIfAdmin, async (req, res) => {
  const allUsers = await getAllUsers();
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
    const userId = await getUserById(req.params.id);
    res.send(userId);
  })
  .put(auth, doesUserExist, verifyPassword, async (req, res) => {
    const userId = req.params.id;
    const { password, newPassword, reNewPassword } = req.body;

    if (!password || !newPassword || !reNewPassword) {
      res.status(400).send("Please fill in all fields.");
      return;
    }
    if (newPassword !== reNewPassword) {
      res.status(400).send("New passwords do not match.");
      return;
    }
    if (newPassword.length < 6 || reNewPassword.length < 6) {
      res.status(400).send("Password should be at least six characters.");
      return;
    }
    const saltRounds = 10;
    bcrypt.hash(req.body.newPassword, saltRounds, async(err, hash) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      req.body.password = hash;
      const updatedUser = await updateUser(req.body, userId);
      res.send(updatedUser);
    });
   
  });

module.exports = router;

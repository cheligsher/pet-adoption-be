const { getUserEmail } = require("../models/usersModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passwordsMatch = (req, res, next) => {
  if (req.body.password !== req.body.repassword) {
    res.status(400).send("Passwords don't match!");
    return;
  }
  next();
};

const isNewUser = async (req, res, next) => {
  const user = await getUserEmail(req.body.email);
  if (user) {
    res.status(400).send("This user already exists!");
    return;
  }
  next();
};

const hashPassword = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    req.body.password = hash;
    next();
  });
};
//?
const doesUserExist = async (req, res, next) => {
  // check if log in email = email on db (model)
  try {
    const user = await getUserByEmail(req.body.email);
    if (!user) {
      res.status(400).send("User does not exist");
      return;
    }
    req.body.user = user;
    next();
  } catch (err) {
    console.log(err);
  }
};

const verifyPassword = async (req, res, next) => {
  // check if log in password = hashed password from db
  const { user, password } = req.body;
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user.id }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      req.body.token = token;
      next();
    } else {
      res.status(400).send("Incorrect Password");
    }
  });
};

module.exports = {
  passwordsMatch,
  isNewUser,
  hashPassword,
  doesUserExist,
  verifyPassword,
};

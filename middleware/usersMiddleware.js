const { getUserByEmail, findUser } = require("../models/usersModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// "/signup"
const passwordsMatch = (req, res, next) => {
  if (req.body.password !== req.body.repassword) {
    res.status(400).send("Passwords don't match!");
    return;
  }
  next();
};

const isNewUser = async (req, res, next) => {
  const user = await findUser(req.body.email);
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

// "/login"
const doesUserExist = async (req, res, next) => {
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
  const { user, password } = req.body;
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      req.body.token = token;
      req.body.password = user.password
      next();
    } else {
      res.status(400).send("Incorrect email or password");
    }
  });
};

const checkPassword = async (req, res, next) => {
  const { user, password } = req.body;
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      req.body.token = token;
      console.log("check pass result token")
      next();
    } else {
      res.status(400).send("Incorrect email or password");
    }
  });
};

module.exports = {
  passwordsMatch,
  isNewUser,
  hashPassword,
  doesUserExist,
  verifyPassword,
  checkPassword
};

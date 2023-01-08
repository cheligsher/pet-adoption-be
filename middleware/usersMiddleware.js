const { getUserEmail } = require("../models/usersModels");
const bcrypt = require("bcrypt")

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
            res.status(500).send(err.message)
            return;
        }
        req.body.password = hash;
        next()
    })
}

module.exports = { passwordsMatch, isNewUser, hashPassword };

const { addUser } = require("../models/usersModels");

const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    const newUser = {
      email,
      password,
      // password has now been hashed
      firstName,
      lastName,
      phone
    };
    const userId = await addUser(newUser);
    res.send({ userId, email, firstName });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { user, token } = req.body;
  try { 
      res.send({token: token, userId: user._id})
    } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { signUp, login };

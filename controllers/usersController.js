const { signUpModel, getUserEmail } = require("../models/usersModels");

const signUp = async (req, res) => {
  try {
    const { email, password, firstName } = req.body;
    const newUser = {
      email,
      password,
      // password has now been hashed
      firstName,
    };
    //addUser(req.body)
    // add user with model to add to db
    const userId = await signUpModel(newUser);
    res.send({ userId, email, firstName });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email) return res.status(400).send("Missing email");
  if(!password) return res.status(400).send("Missing password");
  try {
    const userEmail = await getUserEmail(email);
    if (!userEmail) return res.status(401).send("Invalid credentials");
    const verifiedUser = verifyPassword(password, user.password)
    if(verifiedUser){
      // const { user, token } = req.body;
      const token = createToken(email)
      // res.send({ firstName: user.firstName, token });
      return res.status(200).send(JSON.stringify(token))

    } else{
      return res.status(401).send("Invalid credentials")
    }
  } catch (err) {
    // res.status(400).send(err);
    console.log(err)
  }
};

module.exports = { signUp, login };

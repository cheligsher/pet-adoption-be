const { signUpModel } = require("../models/usersModels")

const signUp = async (req, res) => {
    try{
        const { email, password, firstName } = req.body;
    const newUser = {
        email,
        password,
        // password has now been hashed
        firstName
    }
    const userId = await signUpModel(newUser)
    res.send({ userId, email, firstName })
    } catch (err) {
        console.log(err)
    }
}
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
    //addUser(req.body)
    // add user with model to add to db
    const userId = await signUpModel(newUser)
    res.send({ userId, email, firstName })
    } catch (err) {
        console.log(err)
    }
}

const login = async (req, res) => {
    try{
        const { user, token } = req.body;
        res.send({firstName: user.firstName, token});
          
    } catch (err){
        res.status(400).send(err)
    }
}

module.exports = {signUp, login}
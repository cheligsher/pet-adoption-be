const jwt = require("jsonwebtoken");
const { getUserById } = require("../models/usersModels");

const auth = (req, res, next) => {

    if (!req.headers.authorization) {
      res.status(401).send("Missing token");
      return;
    }
    const token = req.headers.authorization.replace("Bearer ", "");
    // console.log(token)
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        // console.log(err)
        res.status(401).send("Invalid Token");
        return;
      }
      if (decoded) {
        // console.log(decoded)
        req.body.userId = decoded.id;
        next();
      }
      if(!decoded){
        res.status(401).send("Invalid Token key");
      }
    });
  }


  //continue
  const checkIfAdmin = async(req, res, next) => {
    const user = await getUserById(req.body.userId)
    const isAdmin = user.isAdmin
        // if(isAdmin === false){
      // console.log("Not admin")
      // res.status(401).send("User is not an admin");
      // return
    // }
    next()
  }
  
module.exports = { auth, checkIfAdmin }
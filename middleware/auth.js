const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    if (!req.headers.authorization) {
      res.status(401).send("Missing token");
      return;
    }
    const token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        res.status(401).send("Invalid Token");
        return;
      }
      if (decoded) {
        req.body.userId = decoded.id;
        next();
      }
    });
  }

  const checkIfAdmin = (req, res, next) => {
    // const isAdmin = req.body.isAdmin
    next()
  }
  
module.exports = { auth, checkIfAdmin }
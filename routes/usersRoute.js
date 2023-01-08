const express = require("express")
const router = express.Router()
const { passwordsMatch, isNewUser, hashPassword } = require("../middleware/usersMiddleware")
const {validateBody} = require("../middleware/validateBody");
const {loginSchema, signUpSchema} = require("../schemas/usersSchema")



router.get('/', async (req, res) => {
    res.send("GET all users (admin only)")
    // admin only route!
    //fetc from db
})

router.post(
    "/signup",
    validateBody(signUpSchema),
    passwordsMatch,
    isNewUser,
    hashPassword,
    // usersController.signup
    (req, res) => {
        // addUser(req.body)
  
      // add user with model to add to db
      res.send("signup post successful");
    }
);

router.post("/login", 
validateBody(loginSchema), 
// doesUserExist, 
// verify password 
(req, res) => {
  //model
  res.send("login post successful");
});

router.get('/:id', async (req, res) => {
    res.send("GET user by id")
})

router.put('/:id', async (req, res) => {
    res.send("Update user (logged in user only)")
    //logged in user only
})

router.get('/:id/full', async (req, res) => {
    res.send("GET user by id")
})

module.exports = router;
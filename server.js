const express = require("express");
const app = express();
const data = require("./PetsDataSet.json");
const usersRoute = require("./routes/usersRoute");
const petsRoute = require("./routes/petsRoute");
const dotenv = require("dotenv");
dotenv.config({path: `.env`})
const PORT = process.env.PORT
const cors = require("cors");
// const mongoose = require("mongoose");
const {validateBody} = require("./middleware/validateBody");
const {loginSchema, signUpSchema} = require("./schemas/usersSchema")
const usersController = require("./controllers/usersController");
app.use(express.json())
app.use(cors());

app.use("/user", usersRoute);
app.use("/pet", petsRoute);

// move these to "/user" routes 
app.post(
  "/signup",
  validateBody(signUpSchema),
  // usersController.signup
  (req, res) => {
    res.send("signup post successful");
  }
);

app.post("/login", validateBody(loginSchema), 
// checkIfUserExists, 
// encrypt password
(req, res) => {
  //model
  res.send("login post successful");
});

// mongoose
// .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});

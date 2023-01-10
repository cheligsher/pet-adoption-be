const mongoose = require("mongoose");
const User = require("./mongoDB/user");
const Pet = require("./mongoDB/pets");
const dotenv = require("dotenv");
dotenv.config({ path: `.env` });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// const addPet = async () => {
//   const pet = await Pet.create({
//     type: "Dog",
//     name: "Roxy-Bella",
//     adoptionStatus: "Pending",
//     picture: "",
//     height: 35,
//     weight: 75,
//     color: "black",
//     bio: "I'm a cute doggo!",
//     hypoallergnic: true,
//     dietery: [],
//     breed: "Chow"
//   });
//   await pet.save();
//   console.log("Pet saved", pet);
// }

// addPet();

// const addUser = async (newUser/ req.body) => {
//   const user = await User.create({
//     firstName: "Johnny",
//     lastName: "Doeman",
//     email: "john@doe.com",
//   });
// console.log(user)
// };

// addUser();

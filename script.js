const mongoose = require("mongoose");
const User = require("./mongoDB/user");

console.log(process.env.MONGO_URI);
mongoose
  .connect(
    "mongodb+srv://cheli:roxy-bella@pet-adoption.ykyhenk.mongodb.net/pet-adoption?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const addUser = async () => {
  const user = await User.create({
    firstName: "Johnny",
    lastName: "Doeman",
    email: "john@doe.com",
  });
  await user.save();
};

addUser();

const express = require("express");
const app = express();
const data = require("./PetsDataSet.json");
const usersRoute = require("./routes/usersRoute");
const petsRoute = require("./routes/petsRoute");
const dotenv = require("dotenv");
dotenv.config({path: `.env`})
const PORT = process.env.PORT
const cors = require("cors");
app.use(express.json())
app.use(cors());

app.use("/user", usersRoute);
app.use("/pet", petsRoute);

app.get("*", (req, res) => {
  // send back html error page
  res.send("Page for error :)")
})

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});

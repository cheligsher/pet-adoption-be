const express = require("express");
const app = express();
const cors = require("cors");
const usersRoute = require("./routes/usersRoute");
const petsRoute = require("./routes/petsRoute");

app.use(express.json());
app.use(cors());

app.use("/user", usersRoute);
app.use("/pet", petsRoute);

app.use("*", (req, res) => {
  // send back html error page
  res.send("Page for error :)");
});

module.exports = app
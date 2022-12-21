const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const data = require("./PetsDataSet.json")
const usersRoute = require("./routes/usersRoute")
const petsRoute = require("./routes/petsRoute")

app.use('/user', usersRoute)
app.use('/pet', petsRoute)


app.post("/signup", (req, res) => {
  res.send("signup post successful")
})

app.post("/login", (req, res) => {
  res.send("login post successful")
})



app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});

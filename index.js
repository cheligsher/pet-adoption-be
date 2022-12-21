const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const data = require("./PetsDataSet.json")

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Get request successful! YAY")
})
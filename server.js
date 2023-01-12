const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
const app = require("./index")
const PORT = process.env.PORT;
const mongoose = require("mongoose")
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const { accessDB } = require("./models/usersModels");
const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose.set("strictQuery", false)
.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, dbName: "pet-adoptionDB"})
.then((connection) => {
  if(connection) {
    console.log('Connected to DB')
    app.listen(PORT, () => {
      console.log(`App is Listening on port ${PORT}`);
    })
  }
});

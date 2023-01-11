const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
const app = require("./index")
const PORT = process.env.PORT;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { accessDB } = require("./models/usersModels");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect().then(() => {
  app.listen(PORT, () => {
    accessDB(client)
    console.log(`App is Listening on port ${PORT}`);
  })
});

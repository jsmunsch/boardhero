// const mongoose = require("mongoose");
// require("dotenv/config");
// mongoose.connect(
//   process.env.DB_CONNECTION,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("connected do DB!")
// );

// const { MongoClient } = require("mongodb");
// let db = null;
// async function initDatabase() {
//   const dbName = "Boardhero";
//   const url = `mongodb://localhost:27017/${dbName}`;
//   const client = new MongoClient(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   await client.connect();
//   db = client.db(dbName);
// }

// exports.initDatabase = initDatabase;
// exports.getCollection = getCollection;

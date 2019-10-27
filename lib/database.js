const { MongoClient } = require("mongodb");
let db = null;
<<<<<<< HEAD
async function initDatabase(url, dbName) {
=======

async function initDatabase(dbName) {
  const url = `mongodb://localhost:27017/${dbName}`;
>>>>>>> master
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollections(collectionName) {
  if (!db) {
    throw new Error("You have to initialize the database first");
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollections;
<<<<<<< HEAD
=======

>>>>>>> master

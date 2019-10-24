const { MongoClient } = require("mongodb");
let db = null;
async function initDatabase() {
  const dbName = "boardhero";
  const url = `mongodb://localhost:27017/${dbName}`;
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(CollectionName) {
  if (!db) {
    await initDatabase();
  }
  return db.collection(CollectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;

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

async function getCollectionsCollection() {
  if (!db) {
    await initDatabase();
  }
  return db.collection("collection");
}

async function getCollectionsWishlist() {
  if (!db) {
    await initDatabase();
  }
  return db.collection("wishlist");
}
exports.initDatabase = initDatabase;
exports.getCollection = getCollectionsCollection;
exports.getWishlist = getCollectionsWishlist;

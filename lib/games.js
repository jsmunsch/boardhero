const { getCollection } = require("./database");

const collectionName = "games";

async function setGames(game) {
  const gamesCollection = await getCollection(collectionName);
  await gamesCollection.insertOne(game);
}

async function getGames(key) {
  const gamesCollection = await getCollection(collectionName);
  await gamesCollection.find({}).toArray();
  return gamesCollection;
}

exports.setGames = setGames;
exports.getGames = getGames;

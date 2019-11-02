const { getCollection } = require("./database");

const collectionName = "games";

async function setGames(game) {
  const gamesCollection = await getCollection(collectionName);
  await gamesCollection.insertOne(game);
}

async function getGames(key) {
  const gamesCollection = await getCollection(collectionName);
  const games = await gamesCollection.find({}).toArray();
  return games;
}

exports.setGames = setGames;
exports.getGames = getGames;

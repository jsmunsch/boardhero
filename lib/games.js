const { getCollection } = require("./database");

const collectionName = "games";

async function setGames(game) {
  const games = await getCollection(collectionName);
  await games.insertOne(game);
}

async function getGames(key) {
  const gameCollection = await getCollection(collectionName);
  const games = await gameCollection.find({}).toArray();
  return games;
}

exports.setGames = setGames;
exports.getGames = getGames;

const { getCollection } = require("./database");

const collectionName = "games";

async function setGames(game) {
  const gamesCollection = await getCollection(collectionName);
  const gameExists = await gamesCollection.findOne(game);
  if (gameExists) return;
  await gamesCollection.insertOne(game);
}

async function getGames(owner) {
  const gamesCollection = await getCollection(collectionName);
  const games = await gamesCollection.find({ owner: owner }).toArray();
  return games;
}

exports.setGames = setGames;
exports.getGames = getGames;

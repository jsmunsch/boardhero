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

async function removeGame(name) {
  const gamesCollection = await getCollection(collectionName);
  const removedGame = await gamesCollection.deleteOne({ name: name });
  return removedGame;
}

exports.setGames = setGames;
exports.getGames = getGames;
exports.removeGame = removeGame;

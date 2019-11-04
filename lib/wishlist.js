const { getCollection } = require("./database");

const collectionName = "wishlist";

async function setWishlist(game) {
  const gamesCollection = await getCollection(collectionName);
  const gameExists = await gamesCollection.findOne(game);
  if (gameExists) return;
  await gamesCollection.insertOne(game);
}

async function getWishlist(owner) {
  const gameCollection = await getCollection(collectionName);
  const Collection = await gameCollection.find({ owner: owner }).toArray();
  return Collection;
}

exports.setWishlist = setWishlist;
exports.getWishlist = getWishlist;

const { getCollection } = require("./database");

const collectionName = "wishlist";

async function setWishlist(game) {
  const gameCollection = await getCollection(collectionName);
  await gameCollection.insertOne(game);
}

async function getWishlist(owner) {
  const gameCollection = await getCollection(collectionName);
  const Collection = await gameCollection.find({ owner: owner }).toArray();
  return Collection;
}

exports.setWishlist = setWishlist;
exports.getWishlist = getWishlist;

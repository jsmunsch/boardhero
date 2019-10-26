const { getCollection } = require("./database");

const collectionName = "collection";

async function setCollectionData(game) {
  const gameCollection = await getCollection(collectionName);
  await gameCollection.insertOne(game);
}

async function getCollectionData(key) {
  const gameCollection = await getCollection(collectionName);
  const Collection = await gameCollection.find({}).toArray();
  return Collection;
}

exports.setCollectionData = setCollectionData;
exports.getCollectionData = getCollectionData;

const { getCollection } = require("./database");

const collectionName = "users";

async function setUser(user) {
  const gameCollection = await getCollection(collectionName);
  await gameCollection.insertOne(user);
}

async function getUsers(user) {
  const UsersCollection = await getCollection(collectionName);
  const User = await UsersCollection.findOne({
    name: "peter",
    password: "hose"
  });
  return User;
}

exports.setUser = setUser;
exports.getUsers = getUsers;

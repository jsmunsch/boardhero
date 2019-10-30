const { getCollection } = require("./database");

const collectionName = "users";

async function setUser(user) {
  const Users = await getCollection(collectionName);
  await Users.insertOne(user);
}

async function getUsers(user) {
  const UsersCollection = await getCollection(collectionName);
  const User = await UsersCollection.find({}).toArray();
  return User;
}

exports.setUser = setUser;
exports.getUsers = getUsers;

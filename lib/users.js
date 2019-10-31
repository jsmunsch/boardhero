const { getCollection } = require("./database");

const collectionName = "users";

async function setUser(user) {
  const Users = await getCollection(collectionName);
  await Users.insertOne(user);
}

async function getUsers(email) {
  const UsersCollection = await getCollection(collectionName);
  const User = await UsersCollection.findOne({ email: email });
  return User;
}

exports.setUser = setUser;
exports.getUsers = getUsers;

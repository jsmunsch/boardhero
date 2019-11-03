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

async function validateUser(credentials) {
  const UsersCollection = await getCollection(collectionName);
  const Password = await UsersCollection.findOne({
    email: credentials.email,
    password: credentials.password
  });
  return Password;
}

exports.setUser = setUser;
exports.getUsers = getUsers;
exports.validateUser = validateUser;

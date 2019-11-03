const uuidv1 = require("uuid/v1");

const sessions = {};

function createSession(user) {
  const id = uuidv1();
  sessions[id] = user;
  return id;
}

function getUserBySession(id) {
  return sessions[id];
}

function deleteSession(id) {
  delete sessions[id];
}

exports.createSession = createSession;
exports.getUserBySession = getUserBySession;
exports.deleteSession = deleteSession;

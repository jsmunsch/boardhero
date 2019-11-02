const uuidv1 = require("uuid/v1");

const sessions = {};

function createSession(user) {
  const id = uuidv1();
  sessions[id] = user;
  return id;
}

function getBySession(id) {
  return null;
}

exports.createSession = createSession;
exports.getBySession = getBySession;

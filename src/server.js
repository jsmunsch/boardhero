const express = require("express");
const { getCollection } = require("./database");
const { initDatabase } = require("./database");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 8080;

app.get("/api/games", (request, response) => {
  response.end("lena ist so toll");
});

app.get("/api/games", async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "application/json" });
    const gameName = await get(request.params.name);
    return response.end(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.post("/api/games", async (request, response) => {
  try {
    let body = {};
    request.on("data", function(data) {
      body += data;
    });
    request.on("end", async function() {
      response.writeHead(200, { "Content-Type": "application/json" });
      const game = await set(body);
      return response.end({ game });
    });
  } catch (error) {
    response.end("Error");
  }
});

async function set(game) {
  const gameCollection = await getCollection("Collection");
  await gameCollection.insertOne({ game });
}

async function get(key) {
  const gameCollection = await getCollection();
  const result = await gameCollection.find({}).toArray();
  return result;
}

initDatabase().then(() => {
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});

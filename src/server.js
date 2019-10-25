const express = require("express");
const { getCollection, getWishlist } = require("./database");
const { initDatabase } = require("./database");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 8080;

app.get(`/api/wishlist`, async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "application/json" });
    const gameName = await get(request.params);
    return response.end(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.get(`/api/collection`, async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "application/json" });
    const gameName = await get(request.params);
    return response.end(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.post("/api/wishlist", async (request, response) => {
  try {
    let body = "";
    request.on("data", function(data) {
      body += data;
    });
    request.on("end", async function() {
      response.writeHead(200, { "Content-Type": "application/json" });
      const game = await setWishlist(body);
      return response.end({ game });
    });
  } catch (error) {
    response.end("Error");
  }
});

app.post("/api/collection", async (request, response) => {
  try {
    let body = "";
    request.on("data", function(data) {
      body += data;
    });
    request.on("end", async function() {
      response.writeHead(200, { "Content-Type": "application/json" });
      const game = await setCollection(body);
      return response.end({ game });
    });
  } catch (error) {
    response.end("Error");
  }
});

async function setCollection(game) {
  const gameCollection = await getCollection();
  await gameCollection.insertOne({ game });
}

async function setWishlist(game) {
  const gameCollection = await getWishlist();
  await gameCollection.insertOne({ game });
}

async function get(key) {
  const gameCollection = await getCollection();
  const result = await gameCollection.find({}).toArray();
  console.log(result);
  return result;
}

initDatabase().then(() => {
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});

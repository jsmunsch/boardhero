require("dotenv").config();

const express = require("express");
const { getCollectionData, setCollectionData } = require("./lib/collection");
const { getWishlistData, setWishlistData } = require("./lib/wishlist");
const { initDatabase } = require("./lib/database");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

app.get(`/api/wishlist`, async (request, response) => {
  try {
    const gameName = await getWishlistData(request.params);
    return response.json(gameName);
  } catch (error) {
    return response.end("Error");
  }
  x;
});

app.get(`/api/collection`, async (request, response) => {
  try {
    const gameName = await getCollectionData(request.params);
    return response.json(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.post("/api/wishlist", async (request, response) => {
  try {
    const game = await setWishlistData(request.body);
    return response.json({ game });
  } catch (error) {
    response.end("Error");
  }
});

app.post("/api/collection", async (request, response) => {
  try {
    const game = await setCollectionData(request.body);
    return response.json({ game });
  } catch (error) {
    response.end("Error");
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${(process.env.DB_URL, process.env.DB_NAME)} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server listens on http://localhost:${process.env.PORT}`);
  });
});

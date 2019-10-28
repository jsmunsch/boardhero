require("dotenv").config();

const express = require("express");
const { getGames, setGames } = require("./lib/games");
const { getWishlist, setWishlist } = require("./lib/wishlist");
const { initDatabase } = require("./lib/database");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

app.get(`/api/wishlist`, async (request, response) => {
  try {
    const gameName = await getWishlist(request.params);
    return response.json(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.get(`/api/games`, async (request, response) => {
  try {
    const gameName = await getGames(request.params);
    return response.json(gameName);
  } catch (error) {
    return response.end("Error");
  }
});

app.post("/api/wishlist", async (request, response) => {
  try {
    const game = await setWishlist(request.body);
    return response.json({ game });
  } catch (error) {
    response.end("Error");
  }
});

app.post("/api/games", async (request, response) => {
  try {
    const game = await setGames(request.body);
    return response.json({ game });
  } catch (error) {
    response.end("Error");
  }
});

app.get("/api/search", async (request, response) => {
  const targetUrl = `https://www.boardgameatlas.com/api/search?name=${inputValue}&limit=10&fields=name,description,image_url,mechanics,categories,min_players,max_players,min_playtime,max_playtime&client_id=5cIY9zBPpt`;
  axios({
    url: targetUrl,
    method: "GET",
    headers: {
      Accept: "application/json",
      "client-id": "5cIY9zBPpt"
    }
  })
    .then(response => {
      setApiGame(response.data);
    })
    .catch(err => {
      console.error(err);
    });
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${(process.env.DB_URL, process.env.DB_NAME)} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server listens on http://localhost:${process.env.PORT}`);
  });
});

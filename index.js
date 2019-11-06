require("dotenv").config();

const express = require("express");
const { getGames, setGames } = require("./lib/games");
const { getWishlist, setWishlist } = require("./lib/wishlist");
const { getUsers, setUser, validateUser } = require("./lib/users");
const { initDatabase } = require("./lib/database");
const {
  createSession,
  getUserBySession,
  deleteSession
} = require("./lib/sessions");
const axios = require("axios");

const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.get(`/api/wishlist`, async (request, response) => {
  try {
    const user = getUserBySession(request.cookies.session);
    if (!user) return response.status(403).end("unauthorized request");
    if (user) {
      const wishlist = await getWishlist(user.name);
      return response.json(wishlist);
    } else {
      response.send("User not found");
    }
  } catch (error) {
    return response.end("Error");
  }
  response.end();
});

app.get(`/api/games`, async (request, response) => {
  try {
    const user = getUserBySession(request.cookies.session);
    if (!user) return response.status(403).end("unauthorized request");
    if (user) {
      const games = await getGames(user.name);
      return response.json(games);
    } else {
      response.send("User not found");
    }
  } catch (error) {
    console.log(error);
    return response.end("Error");
  }
});

app.post("/api/wishlist", async (request, response) => {
  try {
    const user = getUserBySession(request.cookies.session);
    if (!user) return response.status(403).end("unauthorized request");
    request.body.owner = user.name;
    const WishlistEntry = await setWishlist(request.body);
    return response.json({ WishlistEntry });
  } catch (error) {
    console.error(error);
    response.end(error);
  }
});

app.post("/api/games", async (request, response) => {
  try {
    const user = getUserBySession(request.cookies.session);
    if (!user) return response.status(403).end("unauthorized request");
    request.body.owner = user.name;
    const newGame = await setGames(request.body);
    return response.json({ newGame });
  } catch (error) {
    console.error(error);
    response.end("Error");
  }
});

app.get("/api/users", async (request, response) => {
  try {
    const users = await getUsers(request.params);
    return response.json(users);
  } catch (error) {
    return response.end("Error");
  }
});

app.post("/api/users", async (request, response) => {
  try {
    const emailExist = await getUsers(request.body.email);
    if (emailExist) {
      return response.status(400).json("email already exists");
    } else {
      await setUser(request.body);
      return response.status(200).json("Account succesfully created");
    }
  } catch (error) {
    console.error(error);
    response.end("Error");
  }
});

app.post("/api/login", async (request, response) => {
  try {
    const userExist = await validateUser(request.body);
    if (userExist) {
      const sessionId = createSession(userExist);
      response.cookie("session", sessionId);
      return response.json({ name: userExist.name });
    } else if (!userExist) {
      return response.status(401).json("access denied");
    }
  } catch (error) {
    response.end("Error");
    console.log(error);
  }
  response.end();
});

app.post("/api/logout", async (request, response) => {
  try {
    const session = request.cookies.session;
    deleteSession(session);
    response.clearCookie("session");
    return response.end();
  } catch (error) {
    response.end();
  }
});

app.get("/api/search", async (request, response) => {
  const name = request.query.name;
  const targetUrl = `https://www.boardgameatlas.com/api/search?name=${name}&limit=10&fields=id,name,description,image_url,average_user_rating,num_user_ratings,mechanics,categories,min_players,max_players,min_playtime,max_playtime&client_id=5cIY9zBPpt`;

  return axios({
    url: targetUrl,
    method: "GET",
    headers: {
      Accept: "application/json",
      "client-id": "5cIY9zBPpt"
    }
  })
    .then(response => response.data)
    .then(games => response.json(games));
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

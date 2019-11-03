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
    const games = await getGames();
    return response.json(games);
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
    const newGame = await setGames(request.body);
    return response.json({ newGame });
  } catch (error) {
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
    if (emailExist) return response.status(400).send("email already exists");
    const newUser = await setUser(request.body);
    console.log(request.body.email);
    return response.json(newUser);
  } catch (error) {
    response.end("Error");
  }
});

app.post("/api/login", async (request, response) => {
  try {
    const userExist = await validateUser(request.body);
    console.log("Post request succesfully submitted");
    if (userExist) {
      const sessionId = createSession(userExist);
      response.cookie("session", sessionId);
      return response.json({ name: userExist.name });
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

// app.get("/api/search", async (request, response) => {
//   const name = request.query.name;
//   const targetUrl = `https://www.boardgameatlas.com/api/search?name=${name}&limit=10&fields=name,description,image_url,mechanics,categories,min_players,max_players,min_playtime,max_playtime&client_id=5cIY9zBPpt`;
//   axios({
//     url: targetUrl,
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "client-id": "5cIY9zBPpt"
//     }
//   });
//   const game = response.data;
//   return response.json(game);
// });

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

// import { getGameCollection } from "../src/api/GameCollection";
// import { set } from "mongoose";
// const express = require("express");
// const { getCollection } = require("./database");
// const { ObjectID } = require("mongodb");
// const cors = require("cors");
// const api = express();
// api.use(cors());

// const port = 8080;

// api.get("/Library/Collection", async (request, response) => {
//   try {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     const gameName = await get(request.params.name);
//     return response.end(gameName);
//   } catch (error) {
//     return response.end("Error");
//   }
// });

// api.post("/Library/Browse", async (request, response) => {
//   try {
//     let body = "";
//     request.on("data", function(data) {
//       body += data;
//     });
//     request.on("end", async function() {
//       response.writeHead(200, { "Content-Type": "application/json" });
//       const id = await set(body);
//       return response.end(JSON.stringify({ id: id }));
//     });
//   } catch (error) {
//     response.end("Error");
//   }
// });

// async function set(game) {
//   const gameCollection = await getGameCollection();
//   const result = await gameCollection.insertOne({ game });
//   return result.insertedId.toHexString();
// }

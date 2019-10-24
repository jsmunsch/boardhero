const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", (request, response) => {
  response.send("BlaBla");
});

router.post("/", (request, response) => {
  console.log(request.body);
});

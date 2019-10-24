const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  id: String,
  name: String,
  year_published: Number,
  min_players: Number,
  max_players: Number,
  min_playtime: Number,
  max_playtime: Number,
  min_age: Number,
  description: String,
  image_url: String,
  date: Date.now
});

module.exports = mongoose.model("Posts", PostSchema);

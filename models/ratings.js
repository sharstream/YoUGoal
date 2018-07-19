const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  playerID: String,
  clientID: String,
  playerTeamID: String,
  username: String,
  currentEmail: String,
  overall: Number,
  pace: Number,
  dribbling: Number,
  passing: Number,
  shooting: Number,
  defense: Number,
  physicality: Number
});

const ratings = mongoose.model("ratings", ratingSchema);

module.exports = ratings;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    playerID: String,
    ClientID: String,
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

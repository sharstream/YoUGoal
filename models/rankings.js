const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rankingSchema = new Schema({
    _id: String,
    userID: Number,
    overallRating: Number,
    athletic: Number,
    offence: Number,
    defence: Number
});

const rankings = mongoose.model("rankings", rankingSchema);

module.exports = rankings;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    _id: Number,
    tla: String,
    name: String,
    postion: String,
    jerseyNumber: String,
    dateOfBirth: String,
    nationality: String,
    contractUntil: String,
    marketValue: String,
    teamID: String,
    name1: String,
    shortName: String,
    address: String,
    phone: String,
    website: String,
    email: String,
    founded: String,
    clubColors: String,
    venue: String,
    lastUpdated: String,
    Flags: String
});

const players = mongoose.model("players", playerSchema);

module.exports = players;
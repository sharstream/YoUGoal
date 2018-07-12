const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    tla:String,
    _id:String,
    shortName:String,
    address:String,
    phone:String,
    website:String,
    email:String,
    founded:String,
    clubColors:String,
    venue:String,
    lastUpdated:String,
    Flags:String
});

const teams = mongoose.model("teams", teamSchema);

module.exports = teams;

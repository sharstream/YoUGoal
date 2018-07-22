const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overallSchema = new Schema({
  overall: Number,
  teamID: String
});

const overalls = mongoose.model("overalls", overallSchema);

module.exports = overalls;
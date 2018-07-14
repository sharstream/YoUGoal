const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Number,
    name: String,
    email: String,
    rankings: new Array
});

const users = mongoose.model("users", userSchema);

module.exports = users;
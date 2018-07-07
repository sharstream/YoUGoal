import { Schema } from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  players: [{ 
    name: name, 
    position: position,
    jerseyNumber: jerseyNumber,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
  }],
  tla: { type: String },
  venue: { type: String },
  address: { type: String },
  website: { type: String },
  founded: { type: String, required: true },
  clubColors: { type: String },
  imgTeam: { type: String },
  date: { type: Date, default: Date.now }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
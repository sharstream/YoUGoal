import { Schema } from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  shortName: { type: String },
  address: { type: String },
  tla: { type: String },
  address: { type: String },
  phone: { type: String },
  website: { type: String },
  email: { type: String },
  founded: { type: String, required: true },
  url: {
    image: mongoose.SchemaTypes.Url,
    required: true
  },
  date: { type: Date, default: Date.now }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
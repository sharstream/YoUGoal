import axios from "axios";

export default {
  // Gets all teams
  getTeams: function() {
    return axios.get("/api/teamsGet");
  },
  // Gets the player with the given teamID
  findPlayersByTeamID: function(teamID) {
    return axios.get("/api/teamsGet/" + teamID);
  },
  findTeamByID: function(teamID) {
    return axios.get("/api/teamsGet/team/" + teamID);
  },
  findPlayersByPlayerID: function(_id) {
    return axios.get("/api/teamsGet/player/" + _id);
  }
};

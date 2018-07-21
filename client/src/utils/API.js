import axios from "axios";

export default {
  // Gets all teams
  getTeams: function() {
    return axios.get("/api/teamsGet/teams/");
  },
  // Gets the player with the given teamID
  findPlayersByTeamID: function(teamID) {
    return axios.get("/api/teamsGet/players/" + teamID);
  },
  findTeamByID: function(teamID) {
    return axios.get("/api/teamsGet/team/" + teamID);
  },
  updateRanking: function (RankData) {
    return axios.post("/api/teamsGet/player/" + RankData.playerID, RankData);
  },
  saveRanking: function(RankData) {
    return axios.post("/api/teamsGet/player/" + RankData.playerID, RankData);
  },
  findPlayersByPlayerID: function(_id) {
    return axios.get("/api/teamsGet/player/" + _id);
  },
  findRatingByPlayerID: function(_id) {
    return axios.get("/api/teamsGet/ratingPlayer/" + _id);
  },
  findAvgRatingByTeam: function() {
    return axios.get("/api/teamsGet/ratingTeam/");
  },
  findAllTeamsWithAvgRatings: function() {
    return axios.get("/api/teamsGet/ratingAvgTeam/");
  }
};

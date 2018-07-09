import axios from "axios";

export default {
  getScrapPlayerPictures: function() {
    // URL Base
    let queryURLBase="";

    return axios.get(queryURLBase)
      .then(function (res) {
        console.log("response: " + res.data);
      })
      .catch(function (res) {
        if (res instanceof Error) {
          console.log(res.message);
        } else {
          console.log(res.data);
        }
      });
  },

  // gets all players
  getPlayers: function(query) {
    console.log("passed query: " + query);
    if (query !== "") {
      return axios.get("/api/players", {params: {q: query} });
    }
    return axios.get("/api/players", {params: {q: ""} });
  },
  // gets the player with given id
  getPlayer: function(id) {
    return axios.get("/api/players/" + id);
  },
  // delete the player with given id
  deletePlayer: function(id) {
    return axios.delete("/api/players/" + id);
  },
  // save an player
  savePlayer: function (playerData) {
    return axios.post("/api/players", playerData);
  },

  // gets all teams
  getTeams: function(query) {
    console.log("passed query: " + query);
    if (query !== "") {
      return axios.get("/api/teams", {params: {q: query} });
    }
    return "";
  },
  // gets the player with given id
  getTeam: function(id) {
    return axios.get("/api/teams/" + id);
  },
  // delete the player with given id
  deleteTeam: function(id) {
    return axios.delete("/api/teams/" + id);
  },
  // save an player
  saveTeam: function(teamData) {
    return axios.post("/api/teams", teamData);
  }
};
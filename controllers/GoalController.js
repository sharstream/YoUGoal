const db = require("../models");
const axios = require('axios')
const stringify = require('json-stringify-safe');

const baseUrl = process.env.baseURL || "http://localhost:3001";
// Defining methods for the GoalController
module.exports = {
  findAllTeams: function (req, res) {
    db.teams
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllTeamsWithAvgRatings: function (req, res) {
    setTimeout(() => {
      db.teams
        .find()
        .then(dbModel => {
          axios.get(baseUrl + "/api/teamsGet/ratingTeam")
          // axios.get('http://localhost:3001/api/teamsGet/ratingTeam')
            .then(avgRatings => {
              const aggregatedData = dbModel.map(team => {
                const newTeamObj = team
                avgRatings.data.forEach(rating => {
                  if (rating._id === team._id) {
                    newTeamObj.overallAvg = rating.overallAvg;
                  }
                });

                return newTeamObj
              })
              res.send(stringify(aggregatedData))
            })
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    }, 1);
  },
  findPlayersByTeamID: function (req, res) {
    db.players
      .find({
        teamID: req.params.teamID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByPlayerID: function (req, res) {
    db.players
      .find({
        _id: req.params._id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTeamByID: function (req, res) {
    db.teams
      .find({
        _id: req.params.teamID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRatingByPlayerID: function (req, res) {
    db.ratings
      .find({
        playerID: req.params._id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvgRatingByTeam: function (req, res) {
    db.ratings.aggregate([{
        $group: {
          _id: "$playerTeamID",
          overallAvg: {
            $avg: "$overall"
          }
        }
      }])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveRanking: function (req, res) {
    db.ratings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRanking: function (req, res) {
    db.ratings
      .findOneAndUpdate({
        _id: "5b5230f4f5536610403b42d0"
      }, req.body, {
        upsert: true
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

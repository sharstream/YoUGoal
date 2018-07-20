const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllTeams: function (req, res) {
    console.log('all teams')
    db.teams
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByTeamID: function (req, res) {
    console.log('find players by team id')
    db.players
      .find({ teamID: req.params.teamID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByPlayerID: function (req, res) {
    console.log('find by player id')
    db.players
      .find({ _id: req.params._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTeamByID: function (req, res) {
    console.log('find by team id')
    db.teams
      .find({ _id: req.params.teamID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRatingByPlayerID: function (req, res) {
    console.log('find rating by player id')
    db.ratings
      .find({ playerID: req.params._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvgRatingByTeam: function (req, res) {
    console.log('datatatatatatat')
    db.ratings.aggregate([
      {
        $group: {
          _id: "$playerTeamID",
          overallAvg: {
            $avg: "$overall"
          }
        }
      }
    ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveRanking: function (req, res) {
    console.log('save ranking')
    db.ratings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log(req.body))
      .catch(err => res.status(422).json(err));
  }
};

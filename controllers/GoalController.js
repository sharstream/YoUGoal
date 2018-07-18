const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllTeams: function (req, res) {
    db.teams
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByTeamID: function (req, res) {
    db.players
      .find({ teamID: req.params.teamID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByPlayerID: function (req, res) {
    db.players
      .find({ _id: req.params._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTeamByID: function (req, res) {
    db.teams
      .find({ _id: req.params.teamID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRatingByPlayerID: function (req, res) {
    db.ratings
      .find({ playerID: req.params._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveRanking: function (req, res) {
    db.ratings
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .then(console.log(req.body))
      .catch(err => res.status(422).json(err));
  }
};

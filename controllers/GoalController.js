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
  }
};

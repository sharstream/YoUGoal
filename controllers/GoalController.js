const db = require("../models");
const axios = require('axios')

// Defining methods for the booksController
module.exports = {
  findAllTeams: function (req, res) {
    console.log('all teams')
    db.teams
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllTeamsWithAvgRatings: function (req, res) {
    db.teams
      .find()
      .then(dbModel => {
        axios.get('http://localhost:3001/api/teamsGet/ratingTeam')
        .then(avgRatings => {
          const aggregatedData = dbModel.map(team => {
            const newTeamObj = team
              avgRatings.data.forEach(rating => {
                if (rating._id === team._id){
                  newTeamObj.overallAvg = rating.overallAvg;
                  console.log(newTeamObj)
                }
              });

              return newTeamObj
            })
            res.send(aggregatedData)
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  findPlayersByTeamID: function (req, res) {
    console.log('find players by team id')
    db.players
      .find({
        teamID: req.params.teamID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPlayersByPlayerID: function (req, res) {
    console.log('find by player id')
    db.players
      .find({
        _id: req.params._id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTeamByID: function (req, res) {
    console.log('find by team id')
    db.teams
      .find({
        _id: req.params.teamID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRatingByPlayerID: function (req, res) {
    console.log('find rating by player id')
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
    console.log('save ranking')
    db.ratings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log(req.body))
      .catch(err => res.status(422).json(err));
  },
  updateRanking: function (req, res) {
    console.log('update ranking')
    db.ratings
      .findOneAndUpdate({
        _id: "5b5230f4f5536610403b42d0"
      }, req.body, {
        upsert: true
      })
      .then(dbModel => res.json(dbModel))
      .then(console.log(req.body))
      .catch(err => res.status(422).json(err));
  }
};
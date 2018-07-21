const router = require("express").Router();
const GoalController = require("../../controllers/GoalController");

router.route("/teams/")
  .get(GoalController.findAllTeams);

router
  .route("/ratingTeam/")
  .get(GoalController.findAvgRatingByTeam);

router
  .route("/players/:teamID")
  .get(GoalController.findPlayersByTeamID);

router
  .route("/player/:_id")
  .get(GoalController.findPlayersByPlayerID)
  .post(GoalController.updateRanking);

router
  .route("/player/:_id")
  .get(GoalController.findPlayersByPlayerID)
  .post(GoalController.saveRanking);

router
  .route("/team/:teamID")
  .get(GoalController.findTeamByID);

router
  .route("/ratingPlayer/:_id")
  .get(GoalController.findRatingByPlayerID);

router
  .route("/ratingAvgTeam")
  .get(GoalController.findAllTeamsWithAvgRatings);

module.exports = router;

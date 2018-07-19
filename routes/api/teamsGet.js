const router = require("express").Router();
const GoalController = require("../../controllers/GoalController");

router.route("/")
  .get(GoalController.findAllTeams);

router
  .route("/:teamID")
  .get(GoalController.findPlayersByTeamID);

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
  .route("/ratingTeam/")
  .get(GoalController.findAvgRatingByTeam);
module.exports = router;

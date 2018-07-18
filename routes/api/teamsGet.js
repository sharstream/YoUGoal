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
  .route("/rating/")
  .get(GoalController.findRatingByPlayerID);
module.exports = router;

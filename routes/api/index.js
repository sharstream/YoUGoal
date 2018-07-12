const router = require("express").Router();
const TeamsRoutes = require("./teamsGet");

router.use("/teamsGet", TeamsRoutes);

module.exports = router;

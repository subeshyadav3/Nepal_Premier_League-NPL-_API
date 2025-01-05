// routes/api.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControllers');

// Define routes for API
router.get('/npl', apiController.getAllData);
router.get('/npl/matches', apiController.getMatches);
router.get('/npl/matches/:matchNo', apiController.getMatchNo);
router.get('/npl/ranking', apiController.getPointsTable);
router.get('/npl/results', apiController.getResults);
router.get('/npl/teams/:team', apiController.getTeamsName);

router.get('/npl/teams', apiController.getTeams);

module.exports = router;

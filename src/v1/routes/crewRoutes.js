const router = require('express').Router();
const crewController = require('../../controllers/crewController');

router.get('/', crewController.getAllCrewMembers);

module.exports = router;

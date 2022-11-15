const router = require('express').Router();
const crewController = require('../../controllers/crewController');

router.get('/:id', crewController.getSingleCrewMembers);

module.exports = router;

const router = require('express').Router();
const crewController = require('../../controllers/crewController');

router.get('/:id', crewController.getOneCrewMembers);

module.exports = router;

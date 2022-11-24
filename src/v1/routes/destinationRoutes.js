const router = require('express').Router();
const destinationController = require('../../controllers/destinationController');

router.get('/', destinationController.getAllDestinations);

module.exports = router;

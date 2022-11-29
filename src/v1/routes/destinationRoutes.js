const router = require('express').Router();
const destinationController = require('../../controllers/destinationController');

router.get('/:id', destinationController.getOneDestinations);

module.exports = router;

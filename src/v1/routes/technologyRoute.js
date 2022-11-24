const router = require('express').Router();
const technologyController = require('../../controllers/technologyController');

router.get('/', technologyController.getAllTechnology);

module.exports = router;

const router = require('express').Router();
const technologyController = require('../../controllers/technologyController');

router.get('/:id', technologyController.getSingleTechnology);

module.exports = router;

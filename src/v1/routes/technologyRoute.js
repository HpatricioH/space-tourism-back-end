const router = require('express').Router();
const technologyController = require('../../controllers/technologyController');

router.get('/:id', technologyController.getOneTechnology);

module.exports = router;

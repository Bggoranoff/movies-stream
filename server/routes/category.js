const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.category.get);

router.post('/', controllers.category.post);

module.exports = router;
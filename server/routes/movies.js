const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.movie.get);

router.get('/:categoryId', controllers.movie.getByCategory);

router.post('/', controllers.movie.post);

router.delete('/:movieId', controllers.movie.delete);

router.get('/stream/:movieId', controllers.movie.stream);

module.exports = router;
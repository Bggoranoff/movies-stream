const router = require('../routes');
const models = require('../models');
const config = require('./config');

module.exports = (app) => {
    app.use('/api/movie', router.movie);
    
    app.use('/api/category', router.category);

    app.use('*', (req, res, next) => {
        res.send('<h1>ERROR: Something went wrong!</h1>');
    });
};
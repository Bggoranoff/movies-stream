const config = require('./config/config');
const dbConnection = require('./config/database');

const app = require('express');

dbConnection().then(() => {
    require('./config/express')(app);
    // TODO: require routes

    app.request(function(err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}`));
})
.catch(console.error);
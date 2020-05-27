const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.port || 9999,
        dbUrl: 'mongodb://localhost:27017/movies-db',
        authCookieName: 'auth-token'
    },
    production: {}
};

module.exports = config[env];
const models = require('../models');
const helpers = require('../utils/helpers');

module.exports = {
    get: (req, res, next) => {
        models.Category.find().populate('movies')
            .then(categories => res.send(categories))
            .catch(next);
    },
    post: (req, res, next) => {
        const { title } = req.body;
        models.Category.create({ title, imagePath: `../${helpers.format(title)}` })
            .then(createdCategory => res.send(createdCategory))
            .catch(next);
    }
};
const models = require('../models');
const helpers = require('../utils/helpers');

module.exports = {
    get: (req, res, next) => {
        models.Movie.find().populate('category')
            .then(movies => res.send(movies))
            .catch(next);
        return;
    },
    post: async (req, res, next) => {
        const { title, description, category } = req.body;
        const fileName = helpers.format(title);
        const categoryId = await models.Movie.findOne({ title: category })
            .then(result => result.json())
            .then(data => data._id);
        
        models.Movie.create({
            title,
            description: description == "" ? "No description" : description,
            imagePath: `../movies/${fileName}.jpg`,
            filePath: `../${fileName}.mp4`,
            category: categoryId
        })
        .then(createdMovie => {
            res.send(createdMovie);
        })
        .catch(next);
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        models.Movie.deleteOne({ _id: id })
            .then(deletedMovie => {
                res.send(deletedMovie);
            })
            .catch(next);
    }
}
const models = require('../models');
const helpers = require('../utils/helpers');
const fs = require('fs');

module.exports = {
    get: (req, res, next) => {
        models.Movie.find().populate('category')
            .then(movies => res.send(movies))
            .catch(next);
    },
    getByCategory: (req, res, next) => {
        const { categoryId } = req.params;
        models.Movie.find({ category: categoryId }).populate('category')
            .then(movies => res.send(movies))
            .catch(next);
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
    },
    stream: async (req, res, next) => {
        const { movieId } = req.params;
        const movie = await models.Movie.findOne({ _id: movieId })
            .then(movie => movie.json());
        const filePath = movie.filePath;
        const stat = fs.statSync(filePath);
        const fileSize = stat.size;
        const range = req.headers.range;

        if(range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fs.createReadStream(filePath, { start, end });
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4'
            };

            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4'
            };
            res.writeHead(200, head);
            fs.createReadStream(filePath).pipe(res);
        }
    }
};
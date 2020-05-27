const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: 'No description',
        minlength: [5, 'Too short of a description!'],
        maxlength: [100, 'Too long of a description!']
    },
    imagePath: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    filePath: {
        type: String,
        required: true,
        minlength: [5, 'Invalid path length!'],
        maxlength: [50, 'Invalid path length!']
    }

});

module.exports = new Model('Movie', movieSchema);
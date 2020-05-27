const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId, Number } = Schema.Types;

const categorySchema = new Schema({
    title: {
        type: 'String',
        required: true,
        minlength: [5, 'Category title length is invalid!'],
        maxlength: [30, 'Category title length is invalid!']
    },
    imagePath: {
        type: String,
        required: true
    },
    movies: [{ type: ObjectId, ref: 'Movie' }]
});

module.exports = new Model('Category', categorySchema);
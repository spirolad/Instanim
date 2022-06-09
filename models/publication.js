const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('comment');

const publicationSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        maxLength: 32
    },
    description: {
        type: String,
        maxLength: 2200,
        default: ''
    },
    autor: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    comments: {
        type: commentSchema,
        default: {}
    },
    likes: {
        type: Array,
        default: []
    },
    creationData: {
        type: Date,
        default: Date.now  
    }
}, {timeseries: true});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;
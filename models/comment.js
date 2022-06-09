const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
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
    filename: {
        type: String,
        required: true
    }
}, {timeseries: true});

const Comment = mongoose.model('Comment', publicationSchema);
module.exports = Comment;
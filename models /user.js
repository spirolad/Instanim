const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: 32
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: '',
        maxLength: 300
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    isPrivacy: {
        type: Boolean,
        default: false
    },
    publications: {
        type: Array,
        default: ''
    },
    followers: { 
        type: Array,
        default: ''
    },
    following: {
        type: Array,
        default: ''
    },
    discutions: {
        type: Array,
        default: ''
    },
    likes: {
        type: Array,
        default: ''
    }
}, {timeseries: true});

const User = mongoose.model('User', userSchema);
module.exports = User;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
    resid: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    cuisines: {
        type: String,
        required: true,
        trim: true
    },
    ratings: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        trim: true
    }
});

var Restaurant = mongoose.model('restaurant', schema);

module.exports = Restaurant;

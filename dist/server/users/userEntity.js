var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    }
});

var User = mongoose.model('user', schema);

module.exports = User;

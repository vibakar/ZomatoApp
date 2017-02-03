var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  username : String,
  password : String
});

var User = mongoose.model('user',schema);

module.exports = User;

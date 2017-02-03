var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  resId : Number,
  resLoc : String,
  resCusine : String
});

var Restaurant = mongoose.model('restaurant',schema);

module.exports = Restaurant;

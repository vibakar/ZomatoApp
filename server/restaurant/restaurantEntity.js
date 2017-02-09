var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  resId : {
    type: Number,
    required: true,
    trim: true
  },
  resLoc : {
    type: String,
    required: true,
    trim: true
  },
  resCusine : {
    type: String,
    required: true,
    trim: true
  }
});

var Restaurant = mongoose.model('restaurant',schema);

module.exports = Restaurant;

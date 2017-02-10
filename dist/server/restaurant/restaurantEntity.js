var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    trim: true
  },
  address : {
    type: String,
    required: true,
    trim: true
  },
  cuisines : {
    type: String,
    required: true,
    trim: true
  },
  ratings : {
    type: Number,
    required: true,
    trim: true
  },
  image : {
    type: String,
    required: true,
    trim: true
  }
});

var Restaurant = mongoose.model('restaurant',schema);

module.exports = Restaurant;

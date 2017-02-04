const Restaurant = require('./restaurantEntity');
const logger = require('./../../applogger');

var restaurantController = {

addRestaurant : function(req, res) {
    logger.debug("Inside restaurant add post");
    var newRestaurant = new Restaurant({
      resId:req.body.resId,
      resLoc:req.body.resLoc,
      resCusine:req.body.resCusine
    });

    newRestaurant.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
},

updateRestaurant : function(req, res) {
    logger.debug("Inside restaurant update post");
    var id = req.params.id;
    Restaurant.findByIdAndUpdate(id,{$set:{resLoc:req.body.resLoc}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
},

 deleteRestaurant : function(req, res) {
    logger.debug("Inside restaurant delete post");
    var id = req.params.id;
    Restaurant.findByIdAndRemove(id).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
},

 getRestaurant : function(req, res) {
  logger.debug('Inside get');
  Restaurant.find().then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.send(err);
  });
}

};

module.exports = restaurantController;

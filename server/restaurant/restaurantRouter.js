const logger = require('./../../applogger');
const router = require('express').Router();
const Restaurant = require('./restaurantEntity');

router.post('/add', function(req, res) {
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
});

router.patch('/update/:id', function(req, res) {
    logger.debug("Inside restaurant update post");
    var id = req.params.id;
    Restaurant.findByIdAndUpdate(id,{$set:{resLoc:req.body.resLoc}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

router.delete('/delete/:id', function(req, res) {
    logger.debug("Inside restaurant delete post");
    var id = req.params.id;
    Restaurant.findByIdAndRemove(id).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

router.get('/', function(req, res) {
  logger.debug('Inside get');
  Restaurant.find().then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.send(err);
  });
});

module.exports = router;

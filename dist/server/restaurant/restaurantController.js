const Restaurant = require('./restaurantEntity');
const logger = require('./../../applogger');

var restaurantController = {

    addRestaurant: function(req, res) {
        logger.debug("Inside restaurant add post");
        var newRestaurant = new Restaurant({
            resid: req.body.resid,
            name: req.body.name,
            address: req.body.address,
            cuisines: req.body.cuisines,
            ratings: req.body.ratings,
            image: req.body.image,
            comments: req.body.comments || 'Add Comments'
        });

        newRestaurant.save().then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    },

    updateRestaurant: function(req, res) {
        logger.debug("Inside restaurant update post");
        var id = req.params.id;
        Restaurant.findByIdAndUpdate(id, {
            $set: {
                comments: req.body.comments
            }
        }, {new: true}).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    },

    deleteRestaurant: function(req, res) {
        logger.debug("Inside restaurant delete post");
        var id = req.params.id;
        Restaurant.findByIdAndRemove(id).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    },

    getRestaurant: function(req, res) {
        logger.debug('Inside get');
        Restaurant.find().then((docs) => {
            res.send(docs);
        }, (err) => {
            res.send(err);
        });
    }

};

module.exports = restaurantController;

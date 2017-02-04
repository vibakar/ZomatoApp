const logger = require('./../../applogger');
const router = require('express').Router();
const Restaurant = require('./restaurantEntity');
const controller = require('./restaurantController');

router.post('/add', controller.addRestaurant);

router.put('/update/:id', controller.updateRestaurant);

router.delete('/delete/:id', controller.deleteRestaurant);

router.get('/', controller.getRestaurant);

module.exports = router;

'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
// const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    var newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save().then((doc) => {
        console.log('Insertion success', doc);
        res.send('insertion success');
    }, (err) => {
        console.log(err);
        res.send(err, 'not saved');
    });
});

router.get('/', function(req, res) {
    User.find().then((docs) => {
        res.send(
            docs
        );
    }, (err) => {
        res.send('Cant get the docs', err);
    });
});

router.delete('/delete/:id', function(req, res) {
    var id = req.params.id;
    User.findByIdAndRemove(id).then((docs) => {
        // res.send({
        //     docs
        // });
        res.send('Deletion Success');
    }, (err) => {
        res.send(err);
    });
});

router.put('/update/:id', function(req, res) {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {
        $set: {
            password: req.body.password
        }
    }, {
        new: true
    }).then((docs) => {
        // res.send({
        //     docs
        // });
        res.send('Updation Success');
    }, (err) => {
        res.send(err);
    });
});


module.exports = router;

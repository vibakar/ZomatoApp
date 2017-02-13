'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
const userController = require('./userController');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

router.post('/add', userController.addUser);

router.get('/', userController.getUser);

router.delete('/delete/:id', userController.deleteUser);

router.put('/update/:id', userController.updateUser);

router.post('/login',passport.authenticate('local', {
       failureFlash: 'Invalid Username and Password',
       successFlash: "Welcome to foodie App"
    }),userController.login);

router.get('/logout', userController.logout);

module.exports = router;

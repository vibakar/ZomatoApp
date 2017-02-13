'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
const userController = require('./userController');

router.post('/add', userController.addUser);

router.get('/', userController.getUser);

router.delete('/delete/:id', userController.deleteUser);

router.put('/update/:id', userController.updateUser);

module.exports = router;

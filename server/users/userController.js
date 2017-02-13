const logger = require('./../../applogger');
const User = require('./userEntity');

var userController = {
    addUser: function(req, res) {
        logger.debug("Inside user post");
        var newUser = new User({username: req.body.username, password: req.body.password});

        newUser.save().then((doc) => {
            res.send(doc);
        }, (err) => {
            console.log(err);
            res.send(err);
        });
    },

    updateUser: function(req, res) {
        var id = req.params.id;
        User.findByIdAndUpdate(id, {
            $set: {
                password: req.body.password
            }
        }, {new: true}).then((docs) => {
            res.send(docs);
        }, (err) => {
            res.send(err);
        });
    },

    deleteUser: function(req, res) {
        var id = req.params.id;
        User.findByIdAndRemove(id).then((docs) => {
            res.send({docs});
        }, (err) => {
            res.send(err);
        });
    },

    getUser: function(req, res) {
        User.find().then((docs) => {
            res.send(docs);
        }, (err) => {
            res.send('Cant get the docs', err);
        });
    },

    login: function(req, res) {
       res.json({responseText:'authenticated'});
    },

    logout: function(req, res){
      console.log('Session deleted');
      req.session.destroy();
      res.send({redirect: '/'});
    }
};

module.exports = userController;

const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
const User = require('../models/user');
// get a list of ninjas from the db
router.get('/ninjas', function (req, res, next) {

    Ninja.find({}).then(function (ninjas) {
        res.send(ninjas);
    });
});

// add a new ninja to the db
router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Ninja.findOne({_id: req.params.id}).then(function (ninja) {
            res.send(ninja);
        });

    })
});

// delete a ninja from the db
router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
        res.send(ninja);
    });
});


//user routes

router.get('/users', function (req, res, next) {
    User.find({}).then(function (users) {
        res.send(users);
    });
});

// add a new user to the db
router.post('/users', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function (req, res, next) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Ninja.findOne({_id: req.params.id}).then(function (user) {
            res.send(user);
        });

    })
});

// delete a ninja from the db
router.delete('/ninjas/:id', function (req, res, next) {
    User.findByIdAndRemove({_id: req.params.id}).then(function (user) {
        res.send(user);
    });
});


module.exports = router
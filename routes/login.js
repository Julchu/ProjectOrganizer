"use strict";

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post("/", function (req, res) {
    var user = req.body.user;
    var pass = req.body.pass;
    var newUser = req.body.newUser;
    var newPass = req.body.newPass;
    var newPassConfirm = req.body.newPassConfirm;
    var newEmail = req.body.email;
    if (user && pass) {
        console.log();
        console.log("User '" + user + "' has successfully logged with password '" + pass + "'.");
        console.log();
        res.redirect('/project')
    }
    else if (newUser && newPass && newPass == newPassConfirm && newEmail){
        console.log();
        console.log("New user '" + newUser + "' has signed up with email '" + newEmail + ", password '" + newPass + "', and confirmation password '" + newPassConfirm + "'.");
        console.log();
        res.redirect('/');
    }
    else if (newPass && newPass != newPassConfirm) {
        console.log();
        console.log("Passwords don't match");
        console.log();
    }
    else {
        console.log("Missing information");
        res.redirect('/');
    }
});

module.exports = router;

//Receiving credentials and authorizing users using passport.js: http://passportjs.org/docs

// router.post('/login',
//     passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
//     function(req, res, next) {
//         // Issue a remember me cookie if the option was checked
//         if (!req.body.remember_me_checkbox) { return next(); }

//         remember_me.issueToken(req.user, function(err, token) {
//             if (err) { return next(err); }
//             res.cookie('remember_me', token, { path: '/', httpOnly: true, maxAge: 604800000 });
//             return next();
//         });
//     },
//     function(req, res) {
//         res.redirect('/');
// });
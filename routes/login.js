"use strict";

var express = require('express');
var path = require('path');
var sql = require('./sql');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

sql.validateUser("a");
// sql.createUser("b", "b@gmail.com", "b");
// sql.deleteUser("Julian");

router.post("/login", function (req, res) {
    
    var user = req.body.user;
    var pass = req.body.pass;
    
    var newUser = req.body.newUser;
    var newPass = req.body.newPass;
    var newPassConfirm = req.body.newPassConfirm;
    var newEmail = req.body.email;
    
    if (user && pass) {
        console.log("User '" + user + "' has successfully logged with password '" + pass + "'.");
        res.redirect('/project')
    }
    else if (newUser && newPass && newPass == newPassConfirm && newEmail){
        console.log("New user '" + newUser + "' has signed up with email '" + newEmail + ", password '" + newPass + "', and confirmation password '" + newPassConfirm + "'.");
        res.redirect('/');
    }
    else if (newPass && newPass != newPassConfirm) {
        console.log("Passwords don't match");
    }
    else {
        console.log("Missing information");
        res.redirect('/');
    }
});

module.exports = router;
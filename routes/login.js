"use strict";

let express = require('express');
let path = require('path');
let sql = require('./sql');

let router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// sql.deleteUser("b");

router.post("/login", (req, res) => {
    
    let user = req.body.user;
    let pass = req.body.pass;
    
    let newUser = req.body.newUser;
    let newPass = req.body.newPass;
    let newPassConfirm = req.body.newPassConfirm;
    let newEmail = req.body.email;
    
    if (user && pass) {
        // if (sql.validateUser(user)) {
        //     console.log("User '" + user + "' has successfully logged with password '" + pass + "'.");
        //     res.redirect('/project')
        // }
        // else {
        //     console.log("User does not exist");
        //     res.redirect('/');
        // }
        if (sql.validateUser(user)) {
            console.log("Exists");
        }
    }
    else if (newUser && newPass && newPass == newPassConfirm && newEmail) {
        if (!(sql.validateUser(newUser))) {
            sql.createUser(newUser, newEmail, newPass);
            console.log("New user '" + newUser + "' has signed up with email '" + newEmail + ", password '" + newPass + "', and confirmation password '" + newPassConfirm + "'.");
        }
        else {
            console.log("User already exists");
        }
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
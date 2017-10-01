"use strict";

let express = require('express');
let path = require('path');
let sql = require('./sql');

let router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// sql.deleteUser("b");


router.post("/login", async (req, res) => {
    
    let user = req.body.user;
    let pass = req.body.pass;
    
    let newUser = req.body.newUser;
    let newPass = req.body.newPass;
    let newPassConfirm = req.body.newPassConfirm;
    let newEmail = req.body.email;

    if (user && pass) {
        let exists = await sql.validateUser(user);
        if (exists) {
            console.log("User '" + user + "' has successfully logged with password '" + pass + "'.");
            res.redirect('/project')
        }
        else {
            res.redirect('/');
        }
    }
    else if (newUser && newPass && newPass == newPassConfirm && newEmail) {
        let exists = await sql.validateUser(newUser);
        if (!exists) {
            await sql.createUser(newUser, newEmail, newPass);
            console.log("New user '" + newUser + "' has signed up with email '" + newEmail + ", password '" + newPass + "', and confirmation password '" + newPassConfirm + "'.");
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
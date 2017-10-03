"use strict";

let express = require('express');
let path = require('path');
let sql = require('./sql');

let router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// sql.deleteUser("b");

// let newUser = 'a';
// let exists = async (newUser) => {
//     await sql.validateUser(newUser);
// };

// exists(newUser);

router.post("/login", async (req, res) => {
    // Getting sign-in information
    let user = req.body.user;
    let pass = req.body.pass;
    
    // Getting sign-up information
    let newUser = req.body.newUser;
    let newPass = req.body.newPass;
    let newPassConfirm = req.body.newPassConfirm;
    let newEmail = req.body.email;

    // If attempting to sign-in
    if (user && pass) {

        // Checks if username exists in DB and password matches
        let exists = await sql.validateUser(user, pass);
        if (exists) {
            console.log("User '" + user + "' has successfully logged with password '" + pass + "'.");
            res.redirect('/project')
        }
        else {
            res.redirect('/');
        }
    }

    // If attempting to sign-up
    else if (newUser && newPass && newPass == newPassConfirm && newEmail) {

        // Checking if username already userCheck in DB
        let exists = await sql.validateUser(newUser);

        // If user does not exist, create user
        if (!exists) {
            await sql.createUser(newUser, newEmail, newPass);
            console.log("New user '" + newUser + "' has signed up with email '" + newEmail + ", password '" + newPass + "', and confirmation password '" + newPassConfirm + "'.");
        }
        res.redirect('/');
    }
    
    // Passwords don't match
    else if (newPass && newPass != newPassConfirm) {
        console.log("Passwords don't match");
    }
    else {
        console.log("Missing information");
        res.redirect('/');
    }
});

module.exports = router;
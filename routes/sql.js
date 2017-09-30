"use strict";

let express = require('express');
let path = require('path');
let mysql = require('mysql');

let router = express.Router();

let db = mysql.createPool({
    connectionLimit:500,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b4a8e285a022ee',
    password: '2c726724',
    database: 'heroku_4ea95ec74a86030'
}); 

db.getConnection((err, connection) => {
    if (err) {
        console.log(err);
        throw err;
    }
    else {
        console.log('MySQL Connected');
    }
});

let queryThis = async (q) => {
    return new Promise((resolve, reject) => {
        let run = db.query(q, function(err, result) {
            if (err) reject (err);
            resolve(result);
        });
    });
};

let createUser = async (username, email, password) => {
    let q = "insert into users values ('" + username + "', '" + email + "', '" + password + "')";
    await queryThis(q);
    console.log("Created user: " + username);
};

let deleteUser = async (username) => {
    let q = "DELETE FROM users WHERE username='" + username + "';";
    await queryThis(q);
    console.log("Deleted user: " + username);
};

let validateUser = async (username) => {
    console.log(username);
    let q = "select * from users where username='" + username + "';";
    let run = JSON.stringify(await queryThis(q));
    console.log(run);
    let str = '"username":"' + username + '"'
    console.log(str);
    return run.includes(str);
};

module.exports = {router, createUser, deleteUser, validateUser};


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
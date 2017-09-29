"use strict";

var express = require('express');
var path = require('path');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
    connectionLimit: 5,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b4a8e285a022ee',
    password: '2c726724',
    database: 'heroku_4ea95ec74a86030'
}); 

db.getConnection((err, connection) => {
    if (err) {
        console.log("Connection error");
        throw err;
    }
    else {
        console.log('MySQL Connected');
    }
});

var createUser = function(username, email, password) {
    var q = 'insert into username' + username;
    db.query(q);
};

var deleteUser = function(username) {
    var q = "DELETE FROM users WHERE username=`" + username + "`;";
    db.query(q);
};

var validateUser = function(username) {
    var q = "select username='" + username + "' from users";
    db.query(q, (err, result) => {
        if (err) {
            console.log("Query returned error");
            throw err;
        }
        else {
            console.log(result);
            return result;
            // var str = "";
            // for (var i in result) {
            //     str = result[i];
                // if (str.indexOf('julian') !== -1) {
                //     console.log(str);
                // }
                // console.log(str);
            // }
            // console.log(str);
            // str.indexOf("julian");
            // console.log(str.indexOf("julian"));
        }
    });
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

// var q = 'select * from testtable';
// db.query(q, (err, result) => {
//     if (err) {
//         console.log("Query returned error");
//         throw err;
//     }
//     else {
//         console.log(result);
//         res.send(result);
//     }
// });
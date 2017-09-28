var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post("/", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("User '" + username + "' has attempted to login with password '" + password + "'.");
    res.redirect('/project')
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
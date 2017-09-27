var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/dashboard', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

module.exports = router;
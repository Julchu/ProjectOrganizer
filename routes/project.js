"use strict";

let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/project', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/project.html'));
});

module.exports = router;

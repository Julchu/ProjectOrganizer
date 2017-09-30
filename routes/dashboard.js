let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

module.exports = router;
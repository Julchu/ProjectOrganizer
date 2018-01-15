let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/testing', function(req, res) {
	res.render('testing', { title: 'PlanMe Testing Page' });
});

router.post('/testing', function(req, res) {
	res.send(req.body);
});

module.exports = router;
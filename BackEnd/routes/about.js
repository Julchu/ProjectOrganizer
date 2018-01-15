let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/about', function(req, res) {
	res.render('about', { title: 'PlanMe About' });
});

module.exports = router;
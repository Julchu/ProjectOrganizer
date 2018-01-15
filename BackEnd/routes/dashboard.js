let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/', function(req, res) {
	if (req.user)
		res.render('dashboard', { title: 'PlanMe Dashboard' });
	else
		res.redirect('/login');
});

module.exports = router;
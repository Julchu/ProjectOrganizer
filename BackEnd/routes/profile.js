let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/profile', function(req, res) {
	// console.log(req.user ? req.user.data : "No user data");
	req.user.speak();
	res.render('profile', { title: 'PlanMe Profile' });
});

module.exports = router;
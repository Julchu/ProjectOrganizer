let express = require('express');
let path = require('path');

let router = express.Router();

router.get('/:projectID/boards', function(req, res) {
	// console.log("kerfuffle", req.user.data["ProjectList"]);
	// console.log(req.params.projectID);
	// console.log(req.user.data["ProjectList"].filter(project => project["ProjectID"] === req.params.projectID));
	res.render('boards', {
		title: req.user.data["ProjectList"].filter(project => project["ProjectID"] === Number(req.params.projectID))[0]["ProjectName"]
	});
	// console.log(req.params.projectID);
});

router.get('/:projectID/boards/:boardID', function(req, res) {
	// console.log("kerfuffle", req.user.data["ProjectList"]);
	// console.log(req.params.projectID);
	// console.log(req.user.data["ProjectList"].filter(project => project["ProjectID"] === req.params.projectID));
	res.render('board', {
		title: req.params.boardID
	});
	// console.log(req.params.projectID);
});

module.exports = router;
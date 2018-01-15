let express = require('express');
let path = require('path');
let user = require('../objects/User');
let login = require('./login');

let router = express.Router();
let Project = require('../objects/Project').Project;

router.get('/api/user', (req, res) => {
    req.user ? res.json(req.user.data) : res.json({error: {code: 401, message: "Not yet authorized"}})
});

router.post('/api/users/create', function(req, res) {
    
});

router.post('/api/users/delete', function(req, res) {

});

router.post('/api/users/login', function(req, res) {

});

router.post('/api/users/edit', async (req, res) => {

    if (!req.user) return res.json({error: {code: 401, message: "Not yet authorized"}});
    await req.user.edit({
        "Username": req.body["Username"],
        "EmailAddress": req.body["EmailAddress"],
        "Password": req.body["Password"],
    })
    return res.json(req.user.data);
})

router.get('/api/users/projects', function(req, res) {
    // checks if user
    // if yes -> send data
    // if not -> 401
	req.user ? res.json(req.user.data["ProjectList"]) : res.json({error: {code: 401, message: "Not yet authorized"}})
});

router.post('/api/users/projects/create', async (req, res) => {
    // console.log("Trying to create a project!");
	if (!req.user)
        return res.json({error: {code: 401, message: "Not yet authorized"}});

    await req.user.createProject(req.body.projectName).then( () => res.json(req.user.data["ProjectList"]));
});

router.post('/api/users/projects/delete', async (req, res) => {
    if (!req.user)
        return res.json({error: {code: 401, message: "Not yet authorized"}});
    
    // console.log(req.body.projectID);
    let project = req.user.data["ProjectList"].filter(p => {
        // console.log("DURKADURK", p);
        return Number(p["ProjectID"]) === Number(req.body.projectID)
    })[0];
    await req.user.deleteProject(project).then( () => res.json(req.user.data["ProjectList"]));
})

router.post('/api/users/projects/edit', async (req, res) => {
    if (!req.user)
        return res.json({error: {code: 401, message: "Not yet authorized"}});
    
    // console.log(req.body.projectID, req.body.projectName);
    let project = req.user.data["ProjectList"].filter(p => {
        // console.log("DURKADURK", p);
        return Number(p["ProjectID"]) === Number(req.body.projectID)
    })[0];
    project["ProjectName"] = req.body.projectName
    await req.user.updateProject(project).then( () => res.json(req.user.data["ProjectList"]));
})

router.get('/api/users/projects/:id/', async (req, res) => {
	if (!req.user)
        return res.json({error: {code: 401, message: "Not yet authorized"}});

    const project = new Project();
    await project.loadProject(req.params.id).then( () => res.json(project.data));
});

router.post('/api/users/projects/:id/boards/create', async (req, res) => {
    if (!req.user)
        return res.json({error: {code: 401, message: "Not yet authorized"}});

    const project = new Project();
    await project.loadProject(req.params.id);
    await project.createTaskBoard(req.body.boardTitle);
    return res.json(project.data);
})

module.exports = router;
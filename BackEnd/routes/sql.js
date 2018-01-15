"use strict";

let express = require('express');
let path = require('path');
let mysql = require('mysql');
let bcrypt = require('bcrypt-nodejs');

let router = express.Router();

let db = mysql.createPool({
    connectionLimit:500,
    host: 'planme-cluster.cluster-csniofyo1nbd.us-east-2.rds.amazonaws.com',
    user: 'PlanMe',
    password: '94xo3Ai80boKd5VP',
    database: 'planme_schema'
});

db.getConnection((err, connection) => {
    if (err) {
        // console.log(err);
        throw err;
    }
    else {
        // console.log('MySQL Connected');
    }
});

let makeHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
let validatePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

let queryThis = async (q) => {
    return new Promise((resolve, reject) => {
        db.query(q, (err, result) => {
            if (err) {
                // console.log("Attempt failed");
                reject (err);
            }
            resolve(result);
        });
    });
};

//Data routes for User
let createUser = async (username, email, password) => {
    let q = 'INSERT INTO Users (Username, PasswordHash, EmailAddress, SignUpDate) VALUES ("'+ username +'", "'+ password +'", "'+ email +'", NOW())';
    // console.log("Attempting to create user: " + username);
    let result = await queryThis(q);
    return result.insertId;
};

let deleteUser = async (user) => {
    let q = "DELETE FROM Users WHERE ID="+user.data["UserID"]+";";
    // console.log("Attempting to delete user: " + user.data["Username"]);
    await queryThis(q);
};

let buildUser = async (id) => {
    let userQ = 'SELECT * FROM Users WHERE ID='+id+';';
    let user = await queryThis(userQ);
    let projQ = 'SELECT * FROM (Users JOIN ProjectMemberships ON Users.ID = ProjectMemberships.UserID) JOIN Projects ON Projects.ID = ProjectMemberships.ProjectID;';
    let projList = await queryThis(projQ);

    let data = {
        "UserID" : user[0]["ID"],
        "Username" : user[0]["Username"],
        "Password" : user[0]["PasswordHash"],
        "EmailAddress" : user[0]["EmailAddress"],
        "ProjectList" : []
    }

    for(var i=0; i<projList.length; i++) {
        if(projList[i]["UserID"] === data["UserID"]) {
            let project = {
                "ProjectID" : projList[i]["ProjectID"],
                "ProjectName" : projList[i]["ProjectName"]
            };
            data["ProjectList"].push(project);
        }
    }

    return data;
}

let existingUserIndex = async (username) => {
    let q = "SELECT * FROM Users WHERE Username='" + username + "';";
    let result = await queryThis(q);
    let run = JSON.stringify(result);
    let checkUser = '"Username":"' + username + '"';
    let exists = run.includes(checkUser);
    if(exists) {
        return result[0]["ID"];
    }
    return 0;
};

let existingEmail = async (email) => {
    let q = '"SELECT * FROM Users WHERE EmailAddress="'+email+'";';
    let result = await queryThis(q);
    if(result.length>0) {
        return result[0]["ID"];
    }
    return 0;
};

let authUser = async (username, password) => {
    let q = "SELECT * FROM Users WHERE Username='" + username + "';";
    let run = JSON.stringify(await queryThis(q));
    let validUser = '"Username":"' + username + '"';
    let validPass = '"PasswordHash":"' + password + '"';
    let exists = run.includes(validUser) && run.includes(validPass);
    return exists;
};

let editUser = async (user) => {
    let q = 'UPDATE Users SET Username = "' + user.data["Username"] + '", EmailAddress = "' + user.data["EmailAddress"] + '" WHERE ID='+user.data["UserID"] + ';';
    // console.log("Attempting to create user: ");
    let result = await queryThis(q);
    return result.insertId;
};

//Data routes for Project
let createProject = async(projectName, user) => {
    //Insert new project
    let q = 'INSERT INTO Projects (OwnerID, ProjectName) VALUES ('+user.data["UserID"]+', "'+projectName+'");';    
    // console.log("Attempting to create project: " + username);
    let result = await queryThis(q);
    // console.log(result, user, "bingbong")
    //Add owner as member of new project
    q = 'INSERT INTO ProjectMemberships (UserID, ProjectID) VALUES ('+user.data["UserID"]+', '+result.insertId+');';
    await queryThis(q);
    return result.insertId;
}

let buildProject = async(id) => {
    let projectQ = 'SELECT * FROM Projects WHERE ID='+id+';';
    let proj = await queryThis(projectQ);
    let memberQ = 'SELECT * FROM ProjectMemberships JOIN Users ON ProjectMemberships.UserID = Users.ID WHERE ProjectID='+id+';';
    let members = await queryThis(memberQ);
    let taskBoardQ = 'SELECT * FROM TaskBoards WHERE Project='+id+';';
    let taskBoards = await queryThis(taskBoardQ);
    // console.log("Queries", proj, members, taskBoards);
    let data = {
        "ProjectID" : proj[0]["ID"],
        "ProjectName" : proj[0]["ProjectName"],
        "OwnerID" : proj[0]["OwnerID"],
        "MemberList" : [],
        "TaskBoards" : []
    };

    // console.log("echo", data);

    for(let i = 0; i<members.length; i++) {
        data["MemberList"].push({
            "UserID" : members[i]["UserID"],
            "Username" : members[i]["Username"]
        });
    }

    for(let i = 0; i<taskBoards.length; i++) {
        data["TaskBoards"].push({
            "TaskBoardID" : taskBoards[i]["ID"],
            "TaskBoardName" : taskBoards[i]["TaskBoardName"]
        });
    }

    // console.log("loops made", data.MemberList, data.TaskBoards);
    return data;
}

let deleteProject = async (project) => {
    // console.log(project);
    if (project.data) {
        let q = 'DELETE FROM Projects WHERE ID=' + project.data["ProjectID"] + ';'
        // console.log("Attempting to delete project: " + project.data["ProjectName"]);
        await queryThis(q);
    } else {
        let q = 'DELETE FROM Projects WHERE ID=' + project["ProjectID"] + ';'
        // console.log("Attempting to delete project: " + project["ProjectName"]);
        await queryThis(q);
    }

};

let updateProject = async (project) => {
    let q = 'UPDATE Projects SET ProjectName = "'+project["ProjectName"] + '" WHERE ID = '+project["ProjectID"] + ';';
    await queryThis(q);
}

let addUserToProject = async (ownerID, username, project) => {
    if(ownerID === project.data["OwnerID"]) {
        //get user
        let q = '"SELECT * FROM Users WHERE Username="'+username+'";';
        let result = await queryThis(q);

        if(result.length>0) {
            let user = {
                    "UserID" : result[0]["UserID"],
                    "Username" : result[0]["Username"]
            };
            
            if(!project.data["MemberList"].indexOf(user)) {
                let addQ = "INSERT INTO ProjectMemberships (UserID, ProjectID) VALUES ("+user["UserId"]+", "+project.data["ID"]+");";
                await queryThis(addQ);
                await project.update();
            }
        }
    }
};

//Taskboard
let createTaskBoard = async (name, project) => {
    let q = 'INSERT INTO TaskBoards (TaskBoardName, Project) VALUES ("'+name+'", '+project.data["ProjectID"]+');';
    let result = await queryThis(q);
    return result.insertId;
};

let deleteTaskBoard = async(id) => {
    let q = 'DELETE FROM Projects WHERE ID=' + id + ';'
    // console.log("Attempting to delete taskboard: " + taskboard.name);
    await queryThis(q);
};

let buildTaskBoard = async(id) => {
    let boardQ = 'SELECT * FROM TaskBoards WHERE ID='+id+';';
    let board = await queryThis(boardQ);
    let taskQ = 'SELECT Tasks.*, TaskStates.StateName FROM Tasks JOIN TaskStates WHERE Tasks.State = TaskStates.ID WHERE TaskBoard='+id+';';
    let tasks = await queryThis(taskQ);

    let data = {
        "TaskBoardID" : board[0]["ID"],
        "Name" : board[0]["TaskBoardName"],
        "Tasks" : []
    };

    for(let i = 0; i<tasks.length; i++) {
        data["Tasks"].push({
            "TaskID" : tasks[i]["ID"],
            "Name" : tasks[i]["TaskName"],
            "EffortValue" : tasks[i]["EffortValue"],
            "Description" : tasks[i]["Description"],
            "State" : tasks[i]["StateName"]
        });
    }

    return data;
};

//Tasks -LS
let createTask = async (taskboard, taskName, taskDescription, effortValue) => {
    let q = 'INSERT INTO Tasks (TaskBoard, TaskName, Description, EffortValue, State) VALUES ('+taskboard.data["ID"]+', "'+ taskName +'", "'+ taskDescription +'", '+ effortValue +',"1")';
    // console.log("Attempting to create task: " + taskName);
    let result = await queryThis(q);
    return result.insertId;
};

let deleteTask = async (id)=>{
    let q = 'DELETE * FROM Tasks WHERE ID='+id+';';
    await queryThis(q);
};

module.exports = {
    router,
    createUser,
    deleteUser,
    buildUser,
    existingUserIndex,
    existingEmail,
    authUser,
    createProject,
    deleteProject,
    buildProject,
    addUserToProject,
    createTaskBoard,
    buildTaskBoard,
    deleteTaskBoard,
    createTask,
    deleteTask,
    editUser,
    updateProject
};

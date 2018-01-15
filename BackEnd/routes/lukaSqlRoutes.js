//Tasks -LS
let createTask = async (taskboard, taskName, taskDescription, effortValue) => {
    // console.log("f\n");
    let q = 'INSERT INTO Tasks (taskboard, taskName, taskDescription, effortValue, state) VALUES ("'+taskboard+'", "'+ taskName +'", "'+ taskDescription +'", "'+ effortValue +'","1")';
    // console.log("Attempting to create task: " + taskName);
    await queryThis(q);
};

let deleteTask = async (taskboard, taskName)=>{
    // console.log("f\n");
    let q = 'DELETE * FROM Tasks WHERE taskboard = "'+ taskboard+'" AND taskName = "'+taskName+'";';
    // console.log("Attempting to delete task: " + taskName);
    await queryThis(q);
};

let buildTask = async (taskboard, taskName) => {
    let taskQ = 'SELECT * FROM Tasks WHERE taskboard="' + taskboard +'" AND taskName="' + taskName + '";';
    let task = await queryThis(taskQ);


    let data = {
        "Board" : task["taskboard"],
        "Name" : task["taskName"],
        "Description" : task["taskDescription"],
        "EffortValue": task["effortValue"],
        "State": task["state"]
    }
}

//Task Board -LS
let createTaskboard = async (taskboardName, project) => {
    // console.log("f\n");
    let q = 'INSERT INTO taskboards (taskboardName, Project) VALUES ("'+taskboardName+'", "'+ project +'")';
    // console.log("Attempting to create task: " + taskboardName);
    await queryThis(q);
};


let buildTaskboard = async (taskboardName, project) => {
    let taskboardQ = 'SELECT * FROM taskboards WHERE taskboardName="' + taskboardName +'" AND Project ="' + project + '";';
    let taskboard = await queryThis(taskboardQ);


    let data = {
        "Name" : taskboard["taskboardName"],
        "Project" : taskboard["Project"]
    }
}

module.exports = {router, createUser, deleteUser, existingUser, authUser, buildUser, createTask, deleteTask, buildTask, createtaskboard, deletetaskboard, buildtaskboard};

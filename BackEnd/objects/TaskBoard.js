let sql = require("../routes/sql.js");
//LS
class TaskBoardClass {
    constructor() {
        this.loaded = false;
    }

    async loadTaskBoard(id) {
        if(!loaded) {
            this.data = sql.buildTaskBoard(id);
            this.loaded = true;
        }
    }

    async update() {
        this.data = sql.buildTaskBoard(this.data["ID"]);
    }

    async createTask(taskName, taskDescription, effortValue, taskboard) {
        await sql.createTask(this, taskName, taskDescription, effortValue);
        await this.update();
    }

    async deleteTask(id) {
        await sql.deleteTask(id);
        await this.update();
    }
} 

module.exports = {
    Taskboard : TaskboardClass
};

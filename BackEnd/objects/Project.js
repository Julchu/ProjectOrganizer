let sql = require("../routes/sql.js");

class ProjectClass {
    constructor() {
        this.loaded = false;
    }

    async loadProject(id) {
        if(!this.loaded) {
            this.data = await sql.buildProject(id);
            this.loaded = true;
        }
    }

    async update() {
        this.data = await sql.buildProject(this.data["ProjectID"]);
    }

    async addUser(userObj) {
        await sql.addUserToProject(this, userObj);
        await this.update();
    }
    
    async createTaskBoard(name) {
        for(let i = 0; i<this.data["TaskBoards"].length; i++) {
            if (this.data["TaskBoards"][i]["TaskBoardName"] === name) {
                return;
            }
        }
        await sql.createTaskBoard(name, this);
        await this.update();
    }

    async deleteTaskBoard(id) {
        await sql.deleteTaskBoard(id);
        await this.update();
    }
}

module.exports = {
    Project: ProjectClass
};

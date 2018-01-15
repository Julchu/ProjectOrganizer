let sql = require("../routes/sql.js");
let project = require("../objects/Project.js");


class UserClass {
    constructor() {
        this.loaded = false;
        this.data = undefined;
    }

    speak() {
        // console.log("Hello", (this.data ? "my name is " + this.data["Username"] : "I have no name!"));
    }

    async loadUser(id) {
        if(!this.loaded) {
            this.data = await sql.buildUser(id);
            // console.log(this);
            this.loaded = true;
            return;
        }
        else return;
    }

    async update() {
        this.data = await sql.buildUser(this.data["UserID"]);
    }
    
    // {"Username", "EmailAddress", "Password"}
    async edit(params) {
        this.data["Username"] = params.Username || this.data["Username"];
        this.data["EmailAddress"] = params.EmailAddress || this.data["EmailAddress"];
        this.data["Password"] = params.Password || this.data["Password"];
        await sql.editUser(this);
        await this.update();
    }
    async createProject(name) {
        await sql.createProject(name, this);
        await this.update();
    }

    async deleteProject(proj) {
        await sql.deleteProject(proj);
        await this.update();
    }

    async updateProject(proj) {
        await sql.updateProject(proj);
        await this.update();
    }
}
module.exports = {
    User: UserClass
};

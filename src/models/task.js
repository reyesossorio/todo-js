const TaskStatus = require("./taskstatus");

class Task {
    constructor(id, title, description, status){
        this.id = id; 
        this.title = title; 
        this.description = description; 
        this.created_at = new Date().toLocaleString();
        this.status = TaskStatus.CREATED; 
    }

}

module.exports = Task; 

const express = require("express");
const router = express.Router();

module.exports = (taskService) => {
    const controller = require("../controllers/controllers.js");

    router.post("/task", (req, res) =>
        controller.addTask(req, res, taskService),
    );
    router.get("/task/:id", (req, res) =>
        controller.getTask(req, res, taskService),
    );
    router.get("/task", (req, res) =>
        controller.getAllTasks(req, res, taskService),
    );
    router.patch("/task/:id", (req, res) =>
        controller.updateTask(req, res, taskService),
    );
    router.delete("/task/:id", (req, res) => 
        controller.deleteTask(req, res, taskService), 
    ); 
    return router;
};

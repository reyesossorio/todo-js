const express = require("express");
const router = express.Router();

module.exports = (taskService) => {
    const controller = require("../controllers/controllers.js");

    router.post("/todos", (req, res) =>
        controller.addTask(req, res, taskService),
    );
    router.get("/todos/:id", (req, res) =>
        controller.getTask(req, res, taskService),
    );
    router.get("/todos", (req, res) =>
        controller.getAllTasks(req, res, taskService),
    );
    router.put("/todos/:id", (req, res) =>
        controller.updateTask(req, res, taskService),
    );
    return router;
};

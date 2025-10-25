const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const app = express();

const indexRouter = require("./routes/routes.js");
const logger = require("./middleware/logger.js");
const TaskService = require("./services/taskservice.js");

app.use(logger);
app.use(express.json());

const taskService = new TaskService();

app.use("/", indexRouter(taskService));
app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        status: ReasonPhrases.NOT_FOUND 
    });
});

module.exports = app;

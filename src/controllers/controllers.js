const { StatusCodes, ReasonPhrases } = require("http-status-codes");
exports.getAllTasks = async (req, res, taskService) => {
    try {
        const tasks = taskService.getAllTasks();
        res.status(StatusCodes.OK).json({
            status: ReasonPhrases.OK,
            tasks: tasks,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

exports.addTask = async (req, res, taskService) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            throw new Error("Invalid request body");
        }
        const task = taskService.addTask(title, description);
        res.status(StatusCodes.CREATED).json({
            status: ReasonPhrases.CREATED,
            task: task,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

exports.getTask = async (req, res, taskService) => {
    var id;
    try {
        id = parseInt(req.params.id, 10);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: ReasonPhrases.BAD_REQUEST,
            message: error.message,
        });
    }
    try {
        const task = taskService.getTaskById(id);
        res.status(StatusCodes.OK).json({
            status: ReasonPhrases.OK,
            task: task,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

exports.updateTask = async (req, res, taskService) => {
    var id, title, description;
    try {
        id = parseInt(req.params.id, 10);
        title = req.body.title;
        description = req.body.description;
        if (!(title || description)) {
            throw new Error("Invalid request body");
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: ReasonPhrases.BAD_REQUEST,
            message: error.message,
        });
    }
    try {
        const task = taskService.updateTask(id, title, description);
        res.status(StatusCodes.OK).json({
            status: ReasonPhrases.OK,
            task: task,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

exports.deleteTask = async (req, res, taskService) => {
    var id;
    try {
        id = parseInt(req.params.id, 10);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: ReasonPhrases.BAD_REQUEST,
            message: error.message,
        });
    }

    try {
        const taskId = taskService.deleteTask(id);
        res.status(StatusCodes.OK).json({
            status: ReasonPhrases.OK,
            id: taskId,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

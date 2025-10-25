exports.getAllTasks = async (req, res, taskService) => {
    try {
        const tasks = taskService.getAllTasks();
        res.status(200).json({
            status: "ok",
            tasks: tasks,
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

exports.addTask = async (req, res, taskService) => {
    try {
        const { title, description } = req.body;
        const task = taskService.addTask(title, description);
        res.status(201).json({
            status: "created",
            task: task,
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

exports.getTask = async (req, res, taskService) => {
    var id;
    try {
        id = parseInt(req.params.id, 10);
    } catch (error) {
        res.status(400).send("bad request");
    }
    try {
        const task = taskService.getTaskById(id);
        res.status(200).json({
            status: "ok",
            task: task,
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

exports.updateTask = async (req, res, taskService) => {
    var id, title, description;
    try {
        id = parseInt(req.params.id, 10);
        title = req.body.title;
        description = req.body.description;
    } catch {
        res.status(400).send("bad request");
    }
    try {
        const task = taskService.updateTask(id, title, description);
        res.status(200).json({
            status: "ok",
            task: task,
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

exports.deleteTask = async (req, res, taskService) => {
    var id;
    try {
        id = parseInt(req.params.id, 10);
    } catch {
        res.status(400).send("bad request");
    }

    try {
        const taskId = taskService.deleteTask(id);
        res.status(200).json({
            status: "ok",
            id: taskId,
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

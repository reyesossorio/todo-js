const Task = require("../models/task");

class TaskService {
    constructor() {
        // Internal storage: Map<id, Task>
        this.tasks = new Map();
        this.nextId = 1; // simple incremental ID generator
    }

    // Create and store a new task
    addTask(title, description) {
        const id = this.generateId();
        const newTask = new Task(id, title, description, new Date());
        this.tasks.set(id, newTask);
        return newTask;
    }

    // Retrieve a task by ID
    getTaskById(taskId) {
        const task = this.tasks.get(taskId); // returns undefined if task is not found
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        return task;
    }

    // Retrieve all tasks
    getAllTasks() {
        return Array.from(this.tasks.values());
    }

    // Update an existing task
    updateTask(taskId, title, description) {
        // 1. Find task in Map
        // 2. Update task properties
        // 3. Return updated task
        const task = this.tasks.get(taskId); // returns undefined if task is not found
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        if (title) {
            task.title = title;
        }
        if (description) {
            task.description = description;
        }
        console.log(task);
        this.tasks.set(taskId, task); //adds or updates
        return task;
    }

    // Delete a task
    deleteTask(taskId) {
        if (!this.tasks.delete(taskId)) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        return taskId;
    }

    // Optional: utility to generate unique IDs
    generateId() {
        return this.nextId++;
    }
}

module.exports = TaskService;

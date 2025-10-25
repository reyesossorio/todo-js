const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers.js'); 

router.get("/todos", controller.getAllTodos)

module.exports = router;

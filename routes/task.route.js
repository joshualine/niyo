const express = require("express");
const Task = require("../models/task.model.js");
const router = express.Router();
const {getTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/task.controller.js');


router.get('/', getTasks);
router.get("/:id", getTask);

router.post("/", createTask);

// update a task
router.put("/:id", updateTask);

// delete a task
router.delete("/:id", deleteTask);




module.exports = router;
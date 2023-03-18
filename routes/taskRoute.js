const express = require("express");
const router = express.Router();

const { createTask, getTasks, getTask } = require("../controllers/taskController");

// CREATE TASK
router.post("/tasks", createTask);

// GET ALL TASKS
router.get("/tasks", getTasks);

// GET PARTICULAR TASK
router.get("/tasks/:id", getTask)

module.exports = router;

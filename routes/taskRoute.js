const express = require("express");
const router = express.Router();

const { createTask, getTasks } = require("../controllers/taskController");

// CREATE TASK
router.post("/tasks", createTask);

// GET ALL TASKS
router.get("/tasks", getTasks);

module.exports = router;

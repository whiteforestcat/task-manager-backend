const express = require("express");
const router = express.Router();

const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");

// CREATE TASK
router.post("/tasks", createTask);

// GET ALL TASKS
router.get("/tasks", getTasks);

// GET PARTICULAR TASK
router.get("/tasks/:id", getTask)

// DELETE TASK
router.delete("/tasks/:id", deleteTask)

// UPDATE TASK
// router.put("/tasks/:id", updateTask)
router.patch("/tasks/:id", updateTask);

module.exports = router;

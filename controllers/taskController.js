const Task = require("../models/taskModel");

// CREATE NEW TASK
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE TASK
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json(`No task with id ${req.params.id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json(`No task with id ${req.params.id}`);
    }
    res.status(200).json("Task deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TASK (USING PUT)
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      // syntax is first arguement is to search, subsequent arguments to update
      // previous mongoose functions only need to find the id and perform action (read, delete, etc)
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true, // to run the error message in schema
      }
    );
    if (!task) {
      return res.status(404).json(`No task with id ${req.params.id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };

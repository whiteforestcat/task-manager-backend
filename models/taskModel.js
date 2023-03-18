const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a task"] },
    completed: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema); // first variable is the name of the variable to store the schema in DB

module.exports = Task;

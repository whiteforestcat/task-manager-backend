const dotenv = require("dotenv").config(); // to access dotenv file
const express = require("express");
const connectDB = require("./db/db");
const Task = require("./models/taskModel");

const app = express(); // intiallising express and storing it in variable
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // need this line to access body form-urlecnoded in postman

// ROUTES
app.get("/", async (req, res) => {
  res.send("HomePage");
});

// CREATE TASK
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ DATA
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const startServer = async () => {
  try {
    await connectDB(); // connect to MongoDB first before connecting to server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server runnning on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();

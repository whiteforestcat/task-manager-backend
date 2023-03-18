const dotenv = require("dotenv").config(); // to access dotenv file
const express = require("express");
const connectDB = require("./db/db");

const app = express(); // intiallising express and storing it in variable
connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("HomePage");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server runnning on PORT ${PORT}`);
});

// mongodb+srv://amir:<password>@cluster0.nsphapy.mongodb.net/?retryWrites=true&w=majority

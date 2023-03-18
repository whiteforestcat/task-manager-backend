const dotenv = require("dotenv").config(); // to access dotenv file
const express = require("express");
const connectDB = require("./db/db");

const app = express(); // intiallising express and storing it in variable
connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("HomePage");
});

const startServer = async () => {
  try {
    await connectDB();      // connect to MongoDB first before connecting to server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server runnning on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();

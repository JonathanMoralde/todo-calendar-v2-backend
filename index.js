const express = require("express");
const mongoose = require("mongoose");
const addTask = require("./api/addTask");
const getTask = require("./api/getTask");
const getDates = require("./api/getDateWithTask");
const updateTask = require("./api/updateTask");
const updateTaskStatus = require("./api/updateTaskStatus");
const deleteTask = require("./api/deleteTask");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

// MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

app.use(express.json());

// POST - NEW TASK
app.use("/api", addTask);

// GET - SPECIFIC DATE TAKS
app.use("/api", getTask);

// GET - ALL DATES WITH TASKS
app.use("/api", getDates);

// UPDATE TASK DESCRIPTION
app.use("/api", updateTask);

// UPDATE TASK STATUS
app.use("/api", updateTaskStatus);

// DELETE TASK
app.use("api", deleteTask);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));

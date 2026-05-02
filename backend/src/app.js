const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const workflowRoutes = require("./routes/workflowRoutes");

app.use("/auth", authRoutes);
app.use("/workflows", workflowRoutes);

module.exports = app;
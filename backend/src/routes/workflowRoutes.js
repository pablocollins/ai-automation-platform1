const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createWorkflow,
} = require("../controllers/workflowController");

const {
  createWorkflowStep,
} = require("../controllers/workflowStepController");

const router = express.Router();

// crear workflow
router.post("/", authMiddleware, createWorkflow);

// crear step
router.post("/step", authMiddleware, createWorkflowStep);

// ruta privada test
router.get("/private", authMiddleware, (req, res) => {
  res.json({
    message: "Ruta protegida OK 🚀",
    user: req.user,
  });
});

module.exports = router;
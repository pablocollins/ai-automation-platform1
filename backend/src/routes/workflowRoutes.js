const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createWorkflow } = require("../controllers/workflowController");

const router = express.Router();

// crear workflow (protegido)
router.post("/", authMiddleware, createWorkflow);

// ruta test protegida
router.get("/private", authMiddleware, (req, res) => {
  res.json({
    message: "Ruta protegida OK 🚀",
    user: req.user,
  });
});

module.exports = router;
const prisma = require("../prisma");

const createWorkflowStep = async (req, res) => {
  try {
    const { workflowId, type, config, order } = req.body;

    const step = await prisma.workflowStep.create({
      data: {
        workflowId,
        type,
        config,
        order,
      },
    });

    res.json(step);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createWorkflowStep };
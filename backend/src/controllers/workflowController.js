const prisma = require("../prisma");

const createWorkflow = async (req, res) => {
  try {
    const { name, description, trigger } = req.body;

    const userId = req.user.userId;

    const workflow = await prisma.workflow.create({
      data: {
        name,
        description,
        trigger,
        userId,
      },
    });

    res.json(workflow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createWorkflow };
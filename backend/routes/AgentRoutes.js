const express = require("express");
const router = express.Router();
const AgentController = require("../controllers/AgentController");

//Routes
router.get("/agent", AgentController.getAllAgent);
router.get("/agent/:id", AgentController.getAgentBytId);
router.post("/agent", AgentController.createAgent);
router.put("/agent/:id", AgentController.updateAgent);
router.delete("/agent/:id", AgentController.deleteAgent);

module.exports = router;

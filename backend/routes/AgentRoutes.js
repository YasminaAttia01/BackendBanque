const express = require("express");
const router = express.Router();
const AgentController = require("../controllers/AgentController");

//Routes
router.get("/", AgentController.getAllAgent);
router.get("/:id", AgentController.getAgentBytId);
router.post("/", AgentController.createAgent);
router.put("/:id", AgentController.updateAgent);
router.delete("/:id", AgentController.deleteAgent);

module.exports = router;

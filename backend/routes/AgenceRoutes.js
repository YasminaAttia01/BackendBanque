const express = require("express");
const router = express.Router();
const AgenceController = require("../controllers/AgenceControllers");

//Routes
router.get("/", AgenceController.getAllAgence);
router.get("/:id", AgenceController.getAgenceBytId);
router.post("/", AgenceController.createAgence);
router.put("/:id", AgenceController.updateAgence);
router.delete("/:id", AgenceController.deleteAgence);

module.exports = router;

const express = require("express");
const router = express.Router();
const AgenceController = require("../controllers/AgenceControllers");

//Routes
router.get("/agence", AgenceController.getAllAgence);
router.get("/agence/:id", AgenceController.getAgenceBytId);
router.post("/agence", AgenceController.createAgence);
router.put("/agence/:id", AgenceController.updateAgence);
router.delete("/agence/:id", AgenceController.deleteAgence);

module.exports = router;

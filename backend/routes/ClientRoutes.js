const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/ClientController");

//Routes
router.get("/", ClientController.getAllClient);
router.get("/:id", ClientController.getClientBytId);
router.post("/", ClientController.createClient);
router.put("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);

module.exports = router;

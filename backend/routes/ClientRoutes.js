const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/ClientController");

//Routes
router.get("/client", ClientController.getAllClient);
router.get("/client/:id", ClientController.getClientBytId);
router.post("/client", ClientController.createClient);
router.put("/client/:id", ClientController.updateClient);
router.delete("/client/:id", ClientController.deleteClient);

module.exports = router;

const express = require("express");
const router = express.Router();
const OperationController = require("../controllers/OperationControllers");

//Routes
router.get("/operation", OperationController.getAllOperation);
router.get("/operation/:id", OperationController.getOperationBytId);
router.post("/operation", OperationController.createOperation);
router.put("/operation/:id", OperationController.updateOperation);
router.delete("/operation/:id", OperationController.deleteOperation);

module.exports = router;

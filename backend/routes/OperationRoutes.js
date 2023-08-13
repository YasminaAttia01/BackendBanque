const express = require("express");
const router = express.Router();
const OperationController = require("../controllers/OperationControllers");

//Routes
router.get("/", OperationController.getAllOperation);
router.get("/:id", OperationController.getOperationBytId);
router.post("/", OperationController.createOperation);
router.put("/:id", OperationController.updateOperation);
router.delete("/:id", OperationController.deleteOperation);

module.exports = router;

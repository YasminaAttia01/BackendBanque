const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//Routes
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserBytId);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;

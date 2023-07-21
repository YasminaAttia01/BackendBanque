const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//Routes
router.get("/user", UserController.getAllUser);
router.get("/user/:id", UserController.getUserBytId);
router.post("/user", UserController.createUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;

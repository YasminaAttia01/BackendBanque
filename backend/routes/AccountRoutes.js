const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/AccountControlles");

//Routes
router.get("/account", AccountController.getAllAccount);
router.get("/account/:id", AccountController.getAccountBytId);
router.post("/account", AccountController.createAccount);
router.put("/account/:id", AccountController.updateAccount);
router.delete("/account/:id", AccountController.deleteAccount);

module.exports = router;

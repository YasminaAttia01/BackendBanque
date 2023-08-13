const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/AccountControlles");

//Routes
router.get("/", AccountController.getAllAccount);
router.get("/:id", AccountController.getAccountBytId);
router.post("/", AccountController.createAccount);
router.put("/:id", AccountController.updateAccount);
router.delete("/:id", AccountController.deleteAccount);
// Route pour créditer un montant sur le compte
router.put("/:id/crediter", AccountController.crediter);

// Route pour débiter un montant du compte
router.put("/:id/debiter", AccountController.debiter);

// Route pour récupérer le solde du compte
router.get("/:id/solde", AccountController.getSolde);

module.exports = router;

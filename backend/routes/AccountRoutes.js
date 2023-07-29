const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/AccountControlles");

//Routes
router.get("/account", AccountController.getAllAccount);
router.get("/account/:id", AccountController.getAccountBytId);
router.post("/account", AccountController.createAccount);
router.put("/account/:id", AccountController.updateAccount);
router.delete("/account/:id", AccountController.deleteAccount);
// Route pour créditer un montant sur le compte
router.put("/account/:id/crediter", AccountController.crediter);

// Route pour débiter un montant du compte
router.put("/account/:id/debiter", AccountController.debiter);

// Route pour récupérer le solde du compte
router.get("/account/:id/solde", AccountController.getSolde);

module.exports = router;

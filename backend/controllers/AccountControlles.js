const mongoose = require("mongoose");
const Account = require("../models/Account");

const AccountController = {
  //GET all accounts
  getAllAccount: async (req, res) => {
    try {
      const account = await Account.find({}).sort({ createdAt: -1 });
      res.json(account);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe account.",
      });
    }
  },

  //Get a single account
  getAccountBytId: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id);
      res.json(account);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe account.",
      });
    }
  },

  //create a account
  createAccount: async (req, res) => {
    try {
      const newAccount = new Account(req.body);
      await newAccount.save();
      res.json(newAccount);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la création de la classe account",
      });
    }
  },

  //update a account
  updateAccount: async (req, res) => {
    try {
      const updatedAccount = await Account.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedAccount);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe account.",
      });
    }
  },

  //delete account

  deleteAccount: async (req, res) => {
    try {
      await Account.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe account a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe Account.",
      });
    }
  },
  // Fonction pour créditer un montant sur le compte
  crediter: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id);
      if (!account) {
        return res.status(404).json({ error: "Account not found." });
      }

      const montant = req.body.montant;
      account.Solde += montant;
      await account.save();

      res.json(account);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while crediting the account." });
    }
  },
  // Fonction pour débiter un montant du compte
  debiter: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id);
      if (!account) {
        return res.status(404).json({ error: "Account not found." });
      }

      const montant = req.body.montant;
      if (account.Solde >= montant) {
        account.Solde -= montant;
        await account.save();
        res.json(account);
      } else {
        res
          .status(400)
          .json({ error: "Insufficient balance to perform the debit." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while debiting the account." });
    }
  },
  // Fonction pour récupérer le solde du compte
  getSolde: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id);
      if (!account) {
        return res.status(404).json({ error: "Account not found." });
      }

      res.json({ Solde: account.Solde });
    } catch (error) {
      res.status(500).json({
        error: "An error occurred while retrieving the account balance.",
      });
    }
  },
};
module.exports = AccountController;

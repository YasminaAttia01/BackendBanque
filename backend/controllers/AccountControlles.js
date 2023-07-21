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
};
module.exports = AccountController;

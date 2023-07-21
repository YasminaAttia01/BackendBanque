const mongoose = require("mongoose");
const Operation = require("../models/operations");

const OperationController = {
  //GET all operations
  getAllOperation: async (req, res) => {
    try {
      const operation = await Operation.find({}).sort({ createdAt: -1 });
      res.json(operation);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe operation.",
      });
    }
  },

  //Get a single operation
  getOperationBytId: async (req, res) => {
    try {
      const operation = await Operation.findById(req.params.id);
      res.json(operation);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe operation.",
      });
    }
  },

  //create a operation
  createOperation: async (req, res) => {
    try {
      const newOperation = new Operation(req.body);
      await newOperation.save();
      res.json(newOperation);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la création de la classe operation",
      });
    }
  },

  //update a operation
  updateOperation: async (req, res) => {
    try {
      const updatedOperation = await Operation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedOperation);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe operation.",
      });
    }
  },

  //delete operation

  deleteOperation: async (req, res) => {
    try {
      await Operation.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe operation a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe Operation.",
      });
    }
  },
};
module.exports = OperationController;

const mongoose = require("mongoose");
const Agence = require("../models/Agence");

const AgenceController = {
  //GET all agences
  getAllAgence: async (req, res) => {
    try {
      const agence = await Agence.find({}).sort({ createdAt: -1 });
      res.json(agence);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe agence.",
      });
    }
  },

  //Get a single agence
  getAgenceBytId: async (req, res) => {
    try {
      const agence = await Agence.findById(req.params.id);
      res.json(agence);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe agence.",
      });
    }
  },

  //create a agence
  createAgence: async (req, res) => {
    try {
      const newAgence = new Agence(req.body);
      await newAgence.save();
      res.json(newAgence);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la création de la classe agence",
      });
    }
  },

  //update a agence
  updateAgence: async (req, res) => {
    try {
      const updatedAgence = await Agence.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedAgence);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe agence.",
      });
    }
  },

  //delete agence

  deleteAgence: async (req, res) => {
    try {
      await Agence.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe agence a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe Agence.",
      });
    }
  },
};
module.exports = AgenceController;

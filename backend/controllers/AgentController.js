const mongoose = require("mongoose");
const Agent = require("../models/Agent");

const AgentController = {
  //GET all Agents
  getAllAgent: async (req, res) => {
    try {
      const agent = await Agent.find({}).sort({ createdAt: -1 });
      res.json(agent);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe agent.",
      });
    }
  },

  //Get a single agent
  getAgentBytId: async (req, res) => {
    try {
      const agent = await Agent.findById(req.params.id);
      res.json(agent);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe agent.",
      });
    }
  },

  //create a agent
  createAgent: async (req, res) => {
    try {
      const newAgent = new Agent(req.body);
      await newAgent.save();
      res.json(newAgent);
    } catch (error) {
      res.status(404).json({
        error: "Une erreur est survenue lors de la création de la classe agent",
      });
    }
  },

  //update a agent
  updateAgent: async (req, res) => {
    try {
      const updatedAgent = await Agent.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedAgent);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe agent.",
      });
    }
  },

  //delete agent

  deleteAgent: async (req, res) => {
    try {
      await Agent.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe agent a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe agent.",
      });
    }
  },
};
module.exports = AgentController;

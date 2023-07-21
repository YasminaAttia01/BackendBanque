const mongoose = require("mongoose");
const Client = require("../models/Client");

const ClientController = {
  //GET all clients
  getAllClient: async (req, res) => {
    try {
      const client = await Client.find({}).sort({ createdAt: -1 });
      res.json(client);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe client.",
      });
    }
  },

  //Get a single client
  getClientBytId: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      res.json(client);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe client.",
      });
    }
  },

  //create a client
  createClient: async (req, res) => {
    try {
      const newClient = new Client(req.body);
      await newClient.save();
      res.json(newUser);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la création de la classe client",
      });
    }
  },

  //update a client
  updateClient: async (req, res) => {
    try {
      const updatedClient = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedClient);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe client.",
      });
    }
  },

  //delete client

  deleteClient: async (req, res) => {
    try {
      await Client.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe client a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe client.",
      });
    }
  },
};
module.exports = ClientController;

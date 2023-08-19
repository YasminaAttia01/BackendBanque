const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const UserController = {
  //GET all users
  getAllUser: async (req, res) => {
    try {
      const user = await User.find({}).sort({ createdAt: -1 });
      res.json(user);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de classe user.",
      });
    }
  },

  //Get a single user
  getUserBytId: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la récupération de la classe user.",
      });
    }
  },

  //create a user
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.status(404).json({
        error: "Une erreur est survenue lors de la création de la classe user",
      });
    }
  },

  //update a user
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la mise à jour de la classe user.",
      });
    }
  },

  //delete user

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "La classe user a été supprimée avec succès." });
    } catch (error) {
      res.status(404).json({
        error:
          "Une erreur est survenue lors de la suppression de la classe user.",
      });
    }
  },
  //login user
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);

      //create token
      const token = createToken(user._id);
      res.status(200).json({ email, token, role: user.Role });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  //signup user
  signupUser: async (req, res) => {
    const {
      Role,
      Nom,
      Prenom,
      DateNaiss,
      Adresse,
      PhoneNumber,
      email,
      password,
    } = req.body;
    try {
      const user = await User.signup(
        Role,
        Nom,
        Prenom,
        DateNaiss,
        Adresse,
        PhoneNumber,
        email,
        password
      );

      //create token
      const token = createToken(user._id);
      res.status(200).json({ email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
module.exports = UserController;

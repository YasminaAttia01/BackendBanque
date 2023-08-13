require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");

//express App
const mybank = express();

// Middleware pour parser les données du corps des requêtes
mybank.use(bodyParser.json());

// Connexion à MongoDB ** TO TRANSFER TO DATABASECONNECTION FILE
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//connexion verification
mongoose.connection.on("connected", () => {
  console.log("Connecté à MongoDB");
});
//manage connexion errors
mongoose.connection.on("error", (err) => {
  console.error("Erreur de connexion à MongoDB:", err);
});
// Utiliser les routes de l'utilisateur avec le préfixe '/api'
mybank.use("/api", indexRoutes);

// Lancer le serveur
const port = 3000;
mybank.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes"); // Importer les routes de l'utilisateur
const agentRoutes = require("./routes/AgentRoutes");
const clientRoutes = require("./routes/ClientRoutes");
const agenceRoutes = require("./routes/AgenceRoutes");
const operationRoutes = require("./routes/OperationRoutes");
const accountRoutes = require("./routes/AccountRoutes");

//express App
const mybank = express();

// Middleware pour parser les données du corps des requêtes
mybank.use(bodyParser.json());

// Connexion à MongoDB
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
mybank.use("/api", userRoutes);
mybank.use("/api", clientRoutes);
mybank.use("/api", agentRoutes);
mybank.use("/api", agenceRoutes);
mybank.use("/api", operationRoutes);
mybank.use("/api", accountRoutes);

// Lancer le serveur
const port = 3000;
mybank.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    Nom: {
      type: String,
      required: true,
    },
    Prenom: {
      type: String,
      required: true,
    },
    DateNaiss: {
      type: String,
    },
    Adresse: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

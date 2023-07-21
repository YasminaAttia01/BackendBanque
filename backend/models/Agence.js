const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const agenceSchema = new Schema(
  {
    NumeroAgence: {
      type: Number,
      required: true,
    },
    Libelle: {
      type: String,
      required: true,
    },
    Horraire: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("agence", agenceSchema);

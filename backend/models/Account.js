const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountSchema = new Schema(
  {
    numAccount: {
      type: Number,
      required: true,
    },
    Solde: {
      type: Number,
      required: true,
    },
    DateOuverture: {
      type: String,
    },
    accountType: {
      type: String,
      required: true,
    },
    TauxInteret: {
      type: Number,
      required: true,
    },
    cloture: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("account", accountSchema);

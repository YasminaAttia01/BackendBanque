const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const operationSchema = new Schema(
  {
    dateOperation: {
      type: String,
      required: true,
    },
    montant: {
      type: String,
      required: true,
    },
    TypeOperation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("operation", operationSchema);

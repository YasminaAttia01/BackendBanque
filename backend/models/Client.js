const mongoose = require("mongoose");
const user = require("./user");

const ClientSchema = new mongoose.Schema({
  roleClient: String,
});

ClientSchema.add(user.schema);
module.exports = mongoose.model("Client", ClientSchema);

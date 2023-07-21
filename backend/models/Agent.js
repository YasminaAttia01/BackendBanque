const mongoose = require("mongoose");
const user = require("./user");

const AgentSchema = new mongoose.Schema({
  roleAgent: String,
});

AgentSchema.add(user.schema);
module.exports = mongoose.model("Agent", AgentSchema);

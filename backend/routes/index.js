const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));
router.use("/client", require("./ClientRoutes"));
router.use("/agent", require("./AgentRoutes"));
router.use("/agence", require("./AgenceRoutes"));
router.use("/operation", require("./OperationRoutes"));
router.use("/account", require("./AccountRoutes"));

module.exports = router;

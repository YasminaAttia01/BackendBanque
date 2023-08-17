const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));
router.use("/agence", require("./AgenceRoutes"));
router.use("/operation", require("./OperationRoutes"));
router.use("/account", require("./AccountRoutes"));

module.exports = router;

const express = require("express");
const customerRoute = require("./customerRoute");
const groupRoute = require("./groupRoute");

const router = express.Router();

router.use("/customer", customerRoute);
router.use("/group", groupRoute);

module.exports = router;

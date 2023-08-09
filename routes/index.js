const express = require("express");
const customerRoute = require("./customerRoute");
const groupRoute = require("./groupRoute");
const notifRoute = require("./notificationRoute");

const router = express.Router();

router.use("/customer", customerRoute);
router.use("/group", groupRoute);
router.use("/notification", notifRoute);

module.exports = router;

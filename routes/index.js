const express = require("express");
const customerRoute = require("./customerRoute");

const router = express.Router();

router.use("/customer", customerRoute);

module.exports = router;

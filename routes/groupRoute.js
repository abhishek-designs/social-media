const express = require("express");
const GroupController = require("../controllers/GroupController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/create-group", authenticate, GroupController.createGroup);
router.get("/fetch-groups", authenticate, GroupController.fetchGroups);
router.get("/join-group/:groupId", authenticate, GroupController.joinGroup);

module.exports = router;

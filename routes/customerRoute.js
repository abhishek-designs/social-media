const express = require("express");
const CustomerController = require("../controllers/CustomerController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/signup", CustomerController.signUp);
router.post("/signin", CustomerController.signIn);
router.get("/info", authenticate, CustomerController.information);
router.post("/add-friend", authenticate, CustomerController.addFriend);
router.get("/list-friends", authenticate, CustomerController.listFriends);

module.exports = router;

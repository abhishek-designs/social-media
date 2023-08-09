const express = require("express");
const CustomerController = require("../controllers/CustomerController");
const authenticate = require("../middleware/authenticate");
const multer = require("multer");

const uploadData = multer({ dest: "/dist/user_profiles" });

const router = express.Router();

router.post("/signup", CustomerController.signUp);
router.post("/signin", CustomerController.signIn);
router.get("/info", authenticate, CustomerController.information);
router.post("/add-friend", authenticate, CustomerController.addFriend);
router.patch(
  "/update-profile",
  authenticate,
  uploadData.single("profile-pic"),
  CustomerController.updateUser
);
router.get("/list-friends", authenticate, CustomerController.listFriends);
router.get("/fetch-customers", CustomerController.fetchCustomers);

module.exports = router;

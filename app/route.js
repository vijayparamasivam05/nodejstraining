const express = require("express");
const router = express.Router();
const { getData, postData } = require("./controller/getData");
const { getUserData, postUserData, putUserData, deleteUserData } = require("./controller/userController");

// below we have all our routes
router.get("/getData", getData);
router.post("/postData", postData);

// all the routes for user data
router.get("/userData", getUserData);
router.post("/userData", postUserData);
router.put("/userData", putUserData);
router.delete("/userData", deleteUserData);

module.exports = router;

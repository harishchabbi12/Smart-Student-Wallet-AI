const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getUserSubscription
} = require("../controllers/userController");

router.get(
    "/subscription",
    authMiddleware,
    getUserSubscription
);

module.exports = router;
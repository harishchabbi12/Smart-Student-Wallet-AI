const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const checkProSubscription = require("../middleware/subscriptionMiddleware");

router.get(
  "/test",
  authMiddleware,
  checkProSubscription,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Pro User!",
      user: req.user,
    });
  }
);

module.exports = router;
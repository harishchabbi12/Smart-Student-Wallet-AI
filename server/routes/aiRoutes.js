const express = require("express");
const router = express.Router();

const { getFinancialAdvice } = require("../controllers/aiController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/advice", authMiddleware, getFinancialAdvice);

module.exports = router;
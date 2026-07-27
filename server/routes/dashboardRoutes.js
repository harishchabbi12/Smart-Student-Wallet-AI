const express = require("express");
const router = express.Router();


const {
    getDashboardData,
    getMonthlyAnalytics,
    getExpenseByCategory,
    getRecentActivity,
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");

console.log("✅ Dashboard Routes Loaded");

router.get("/", authMiddleware, getDashboardData);
router.get("/monthly", authMiddleware, getMonthlyAnalytics);
router.get("/categories", authMiddleware, getExpenseByCategory);
router.get("/recent", authMiddleware, getRecentActivity);

module.exports = router;
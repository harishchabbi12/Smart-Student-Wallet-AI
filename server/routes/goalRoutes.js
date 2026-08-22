const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
  getGoalSummary,
} = require("../controllers/goalController");

// ======================================================
// CREATE A NEW GOAL
// POST /api/goals
// ======================================================
router.post("/", authMiddleware, createGoal);

// ======================================================
// GET GOAL SUMMARY
// GET /api/goals/summary
// ======================================================
router.get("/summary", authMiddleware, getGoalSummary);

// ======================================================
// GET ALL GOALS FOR LOGGED-IN USER
// GET /api/goals
// ======================================================
router.get("/", authMiddleware, getGoals);

// ======================================================
// GET ONE GOAL
// GET /api/goals/:id
// ======================================================
router.get("/:id", authMiddleware, getGoalById);

// ======================================================
// UPDATE A GOAL
// PUT /api/goals/:id
// ======================================================
router.put("/:id", authMiddleware, updateGoal);

// ======================================================
// DELETE A GOAL
// DELETE /api/goals/:id
// ======================================================
router.delete("/:id", authMiddleware, deleteGoal);

module.exports = router;
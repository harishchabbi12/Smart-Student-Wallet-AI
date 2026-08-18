const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Create a new goal
router.post("/", authMiddleware, createGoal);

// Get all goals for logged-in user
router.get("/", authMiddleware, getGoals);

// Get one goal
router.get("/:id", authMiddleware, getGoalById);

// Update a goal
router.put("/:id", authMiddleware, updateGoal);

// Delete a goal
router.delete("/:id", authMiddleware, deleteGoal);

module.exports = router;
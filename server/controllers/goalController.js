const Goal = require("../models/Goal");

// ======================================================
// CREATE A NEW GOAL
// ======================================================
const createGoal = async (req, res) => {
  try {
    const {
      title,
      targetAmount,
      currentAmount,
      deadline,
      category,
    } = req.body;

    // Basic validation
    if (!title || !targetAmount || !deadline) {
      return res.status(400).json({
        success: false,
        message: "Title, target amount and deadline are required",
      });
    }

    // Create goal for logged-in user
    const goal = await Goal.create({
      user: req.user.id,
      title,
      targetAmount,
      currentAmount: currentAmount || 0,
      deadline,
      category: category || "Other",
    });

    res.status(201).json({
      success: true,
      message: "Goal created successfully",
      goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// GET ALL GOALS OF LOGGED-IN USER
// ======================================================
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      goals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// GET GOAL SUMMARY
// ======================================================
const getGoalSummary = async (req, res) => {
  try {
    const goals = await Goal.find({
      user: req.user.id,
      status: { $ne: "CANCELLED" },
    });

    const totalGoals = goals.length;

    const activeGoals = goals.filter(
      (goal) => goal.status === "ACTIVE"
    ).length;

    const completedGoals = goals.filter(
      (goal) => goal.status === "COMPLETED"
    ).length;

    const totalTargetAmount = goals.reduce(
      (total, goal) => total + goal.targetAmount,
      0
    );

    const totalSavedAmount = goals.reduce(
      (total, goal) => total + goal.currentAmount,
      0
    );

    const overallProgress =
      totalTargetAmount > 0
        ? Number(
            ((totalSavedAmount / totalTargetAmount) * 100).toFixed(2)
          )
        : 0;

    res.status(200).json({
      success: true,
      summary: {
        totalGoals,
        activeGoals,
        completedGoals,
        totalTargetAmount,
        totalSavedAmount,
        overallProgress,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// GET ONE GOAL
// ======================================================
const getGoalById = async (req, res) => {
  try {
    const goal = await Goal.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found",
      });
    }

    res.status(200).json({
      success: true,
      goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// UPDATE A GOAL
// ======================================================
const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found",
      });
    }

    const {
      title,
      targetAmount,
      currentAmount,
      deadline,
      category,
      status,
    } = req.body;

    if (title !== undefined) {
      goal.title = title;
    }

    if (targetAmount !== undefined) {
      goal.targetAmount = targetAmount;
    }

    if (currentAmount !== undefined) {
      goal.currentAmount = currentAmount;
    }

    if (deadline !== undefined) {
      goal.deadline = deadline;
    }

    if (category !== undefined) {
      goal.category = category;
    }

    if (status !== undefined) {
      goal.status = status;
    }

    await goal.save();

    res.status(200).json({
      success: true,
      message: "Goal updated successfully",
      goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// DELETE A GOAL
// ======================================================
const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Goal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// EXPORT CONTROLLERS
// ======================================================
module.exports = {
  createGoal,
  getGoals,
  getGoalSummary,
  getGoalById,
  updateGoal,
  deleteGoal,
};
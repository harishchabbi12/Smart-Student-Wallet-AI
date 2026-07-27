const express = require("express");
const router = express.Router();

const {
    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getWalletBalance,
} = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware, addTransaction);
router.get("/", authMiddleware, getTransactions);
router.put("/:id", authMiddleware, updateTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);
router.get("/balance", authMiddleware, getWalletBalance);
module.exports = router;
const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
    try {
        const { type, category, amount, description, date } = req.body;

        const transaction = await Transaction.create({
            user: req.user.id,
            type,
            category,
            amount,
            description,
            date,
        });

        res.status(201).json({
            success: true,
            message: "Transaction Added Successfully",
            transaction,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.id,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: transactions.length,
            transactions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id,
            },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Transaction Updated Successfully",
            transaction,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Transaction Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getWalletBalance = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id });

        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });

        res.status(200).json({
            success: true,
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getWalletBalance,
};
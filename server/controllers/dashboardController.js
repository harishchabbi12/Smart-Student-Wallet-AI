const Transaction = require("../models/Transaction");

const getDashboardData = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.id,
        }).sort({ createdAt: -1 });

        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });

        const recentTransactions = transactions.slice(0, 5);

        res.status(200).json({
            success: true,
            totalBalance: totalIncome - totalExpense,
            totalIncome,
            totalExpense,
            recentTransactions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getMonthlyAnalytics = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.id,
        });

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const monthlyTransactions = transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);

            return (
                transactionDate.getMonth() === currentMonth &&
                transactionDate.getFullYear() === currentYear
            );
        });

        let totalIncome = 0;
        let totalExpense = 0;

        monthlyTransactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });

        res.status(200).json({
            success: true,
            month: currentMonth + 1,
            year: currentYear,
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense,
            totalTransactions: monthlyTransactions.length,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getExpenseByCategory = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.id,
            type: "expense",
        });

        const categoryData = {};

        transactions.forEach((transaction) => {
            if (categoryData[transaction.category]) {
                categoryData[transaction.category] += transaction.amount;
            } else {
                categoryData[transaction.category] = transaction.amount;
            }
        });

        const result = Object.keys(categoryData).map((category) => ({
            category,
            amount: categoryData[category],
        }));

        res.status(200).json({
            success: true,
            categories: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const getRecentActivity = async (req, res) => {
    try {
        const recentTransactions = await Transaction.find({
            user: req.user.id,
        })
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            recentTransactions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getDashboardData,
    getMonthlyAnalytics,
    getExpenseByCategory,
    getRecentActivity,
};
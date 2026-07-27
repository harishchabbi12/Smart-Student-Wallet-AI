const Transaction = require("../models/Transaction");
const { generateFinancialAdvice } = require("../services/aiService");

const getFinancialAdvice = async (req, res) => {
    console.log("AI Controller Hit");
    try {
        const transactions = await Transaction.find({
            user: req.user.id,
        });

        let totalIncome = 0;
        let totalExpense = 0;

        const categoryData = {};

        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;

                if (categoryData[transaction.category]) {
                    categoryData[transaction.category] += transaction.amount;
                } else {
                    categoryData[transaction.category] = transaction.amount;
                }
            }
        });

        const financialData = {
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense,
            categories: categoryData,
        };

        const advice = await generateFinancialAdvice(financialData);

        res.status(200).json({
            success: true,
            advice,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getFinancialAdvice,
};
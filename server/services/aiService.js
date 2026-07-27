const axios = require("axios");

const generateFinancialAdvice = async (financialData) => {
    try {
        const {
            totalIncome,
            totalExpense,
            balance,
            categories,
        } = financialData;

        const prompt = `
You are an intelligent personal finance advisor.

Analyze the following financial data.

Income: ₹${totalIncome}
Expense: ₹${totalExpense}
Balance: ₹${balance}

Expense Categories:
${JSON.stringify(categories, null, 2)}

Provide:

1. Spending analysis
2. Saving suggestion
3. Budget recommendation

Keep the response short, practical and beginner-friendly.
`;

       const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent",
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            },
            {
                params: {
                    key: process.env.GEMINI_API_KEY,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error(
            "Gemini Error:",
            error.response?.data || error.message
        );

        throw new Error(
            error.response?.data?.error?.message || error.message
        );
    }
};

module.exports = {
    generateFinancialAdvice,
};
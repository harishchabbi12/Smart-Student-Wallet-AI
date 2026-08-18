const subscriptionPlans = [
    {
        id: "FREE",
        name: "Free Plan",
        price: 0,
        currency: "INR",
        duration: "Lifetime",
        popular: false,
        features: [
            "Expense Tracking",
            "Income Tracking",
            "Basic Dashboard",
            "Basic AI Advice"
        ]
    },
    {
        id: "PRO_MONTHLY",
        name: "Pro Monthly",
        price: 99,
        currency: "INR",
        duration: "1 Month",
        popular: true,
        features: [
            "Everything in Free",
            "AI Financial Coach",
            "Unlimited Goals",
            "Advanced Analytics",
            "PDF Reports",
            "Priority Support"
        ]
    },
    {
        id: "PRO_YEARLY",
        name: "Pro Yearly",
        price: 999,
        currency: "INR",
        duration: "1 Year",
        popular: false,
        features: [
            "Everything in Pro",
            "2 Months Free",
            "Future Premium Features"
        ]
    }
];

module.exports = subscriptionPlans;
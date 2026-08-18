const subscriptionPlans = require("../config/subscriptionPlans");

const getSubscriptionPlans = async (req, res) => {
    try {

        res.status(200).json({
            success: true,
            plans: subscriptionPlans
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getSubscriptionPlans
};
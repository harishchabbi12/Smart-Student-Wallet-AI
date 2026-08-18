const User = require("../models/User");

const getUserSubscription = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("subscription");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            subscription: user.subscription
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getUserSubscription
};
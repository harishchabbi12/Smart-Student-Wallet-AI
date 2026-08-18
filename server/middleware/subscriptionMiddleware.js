const checkProSubscription = (req, res, next) => {
    try {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        if (req.user.subscription.plan !== "PRO") {
            return res.status(403).json({
                success: false,
                message: "This feature is available only for Pro users."
            });
        }

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = checkProSubscription;
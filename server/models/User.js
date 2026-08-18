const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    subscription: {
        plan: {
            type: String,
            enum: ["FREE", "PRO"],
            default: "FREE"
        },
        status: {
            type: String,
            enum: ["ACTIVE", "EXPIRED"],
            default: "ACTIVE"
        },
        startedAt: {
            type: Date,
            default: Date.now
        },
        expiresAt: {
            type: Date,
            default: null
        }
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
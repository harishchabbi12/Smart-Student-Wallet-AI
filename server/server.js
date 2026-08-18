const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const goalRoutes = require("./routes/goalRoutes");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const aiRoutes = require("./routes/aiRoutes");
const proRoute = require("./routes/proRoute");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/goals", goalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pro", proRoute);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Smart Student Wallet AI Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
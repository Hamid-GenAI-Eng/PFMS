const express = require("express");
const Finance = require("../models/Finance");

const router = express.Router();

// Add Budget
router.post("/budget", async (req, res) => {
    const { user_id, date, amount, source } = req.body;
    const financeData = await Finance.findOne({ user_id });

    if (!financeData) return res.status(404).json({ message: "User finance record not found" });

    financeData.budget.push({ date, amount, source });
    await financeData.save();

    res.json({ message: "Budget added", financeData });
});

// Add Expense
router.post("/expense", async (req, res) => {
    const { user_id, date, amount, reason } = req.body;
    const financeData = await Finance.findOne({ user_id });

    if (!financeData) return res.status(404).json({ message: "User finance record not found" });

    financeData.expenses.push({ date, amount, reason });
    await financeData.save();

    res.json({ message: "Expense added", financeData });
});

// Add Investment
router.post("/investment", async (req, res) => {
    const { user_id, date, amount, type } = req.body;
    const financeData = await Finance.findOne({ user_id });

    if (!financeData) return res.status(404).json({ message: "User finance record not found" });

    financeData.investments.push({ date, amount, type });
    await financeData.save();

    res.json({ message: "Investment added", financeData });
});

// Add Goal
router.post("/goal", async (req, res) => {
    const { user_id, target_amount, saved_amount, deadline, description } = req.body;
    const financeData = await Finance.findOne({ user_id });

    if (!financeData) return res.status(404).json({ message: "User finance record not found" });

    financeData.goals.push({ target_amount, saved_amount, deadline, description });
    await financeData.save();

    res.json({ message: "Goal added", financeData });
});

// Get Complete Finance Data of a User
router.get("/data/:user_id", async (req, res) => {
    const { user_id } = req.params;
    const financeData = await Finance.findOne({ user_id });

    if (!financeData) return res.status(404).json({ message: "User finance record not found" });

    res.json(financeData);
});

module.exports = router;

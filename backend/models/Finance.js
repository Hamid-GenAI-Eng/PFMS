const mongoose = require("mongoose");
const { financeDB } = require("../db");

const financeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, unique: true },
    budget: [{
        date: Date,
        amount: Number,
        source: String  
    }],
    expenses: [{
        date: Date,
        amount: Number,
        reason: String  
    }],
    investments: [{
        date: Date,
        amount: Number,
        type: String 
    }],
    goals: [{
        target_amount: Number,
        saved_amount: Number,
        deadline: Date,
        description: String
    }]
});

module.exports = financeDB.model("Finance", financeSchema);

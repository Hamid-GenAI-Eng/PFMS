const mongoose = require("mongoose");
const { authDB } = require("../db");

const UserSchema = new mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmpassword: String,
    created_at: { type: Date, default: Date.now }
})

module.exports = authDB.model("User", UserSchema);
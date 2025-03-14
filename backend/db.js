const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const authDB = await mongoose.createConnection(
            "mongodb+srv://smartfinancemanager121:PFMS121@userinfo.fvllg.mongodb.net/AuthDB?retryWrites=true&w=majority&appName=UserInfo",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        authDB.on("connected", () => console.log("authDB Connected successfully."));
        authDB.on("error", (err) => console.error("authDB Connection Error:", err));

        const financeDB = await mongoose.createConnection(
            "mongodb+srv://smartfinancemanager121:PFMS121@userinfo.fvllg.mongodb.net/FinanceDB?retryWrites=true&w=majority&appName=UserInfo",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        financeDB.on("connected", () => console.log("financeDB Connected successfully."));
        financeDB.on("error", (err) => console.error("financeDB Connection Error:", err));

        return { authDB, financeDB }; // Return the connections
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const connectDB = require("./db"); 
// const authRoutes = require("./routes/authRoutes"); 
// const financeRoutes = require("./routes/financeRoutes");

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cors());

// Connect to MongoDB
connectDB().then(({ authDB, financeDB }) => {
    console.log("Databases initialized successfully.");
}).catch(err => console.error("Database initialization failed:", err));


// Routes
app.use("/auth", authRoutes);
app.use("/finance", financeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});


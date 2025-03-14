import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import BudgetManager from "./components/Budget";
import ExpensesManager from "./components/Expenses";
import LossProfit from "./components/loss-profit";
import InvestmentTracker from "./components/Investment";
import FinanceGoals from "./components/financeGoals";
import SummaryAnalysis from "./components/userstats"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);  

  const budgets = [
    { id: 1, category: "Salary", amount: 50000 },
    { id: 2, category: "Freelance", amount: 20000 },
    { id: 3, category: "Investments", amount: 15000 },
  ];
  
  const expenses = [
    { id: 1, category: "Rent", amount: 15000 },
    { id: 2, category: "Groceries", amount: 8000 },
    { id: 3, category: "Transportation", amount: 5000 },
    { id: 4, category: "Entertainment", amount: 3000 },
    { id: 5, category: "Healthcare", amount: 7000 },
  ];
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<BudgetManager/>} />
      </Routes>
    </Router>
  );
}

export default App;

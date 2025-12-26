import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/User";
import AddFood from "./pages/Foods";
import DailyConsume from "./pages/LogCalories";
import FoodHistory from "./pages/FoodHistory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/daily-consume" element={<DailyConsume />} />
        <Route path="/food-history" element={<FoodHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

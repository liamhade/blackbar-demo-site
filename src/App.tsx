import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import OrderSummary from "./pages/OrderSummary"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard/order-summary" element={isLoggedIn ? <OrderSummary /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
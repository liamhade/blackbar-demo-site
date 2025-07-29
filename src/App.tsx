import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PagePad from  "./components/PagePad";
import DashboardPage from "./pages/DashboardPage";
import OrderSummary from "./pages/OrderSummary"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        {/* Multiple routes to the login page. */}
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/dashboard" element={isLoggedIn ? <PagePad child={<DashboardPage />} /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard/order-summary" element={isLoggedIn ? <PagePad child={<OrderSummary />} /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
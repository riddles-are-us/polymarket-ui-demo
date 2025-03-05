import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MarketPage from "./pages/MarketPage";
import CustomPage from "./pages/CustomPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="fixed top-4 left-4 z-50 space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Market Page
          </NavLink>
          <NavLink
            to="/custom"
            className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Custom Page
          </NavLink>
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<MarketPage />} />
            <Route path="/custom" element={<CustomPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

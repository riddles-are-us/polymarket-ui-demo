import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MarketPage from "./pages/MarketPage";
import CustomPage from "./pages/CustomPage";
import { ThemeProvider, useThemeContext } from "polymarket-ui";
import "./index.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <button onClick={toggleDarkMode} className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-500 text-white rounded-md">
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

function AppContent() {
  const { isDarkMode } = useThemeContext();

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-gray-100"}`}>
      <nav className="fixed top-4 left-4 z-50 space-x-2 md:space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md 
            ${
              isActive
                ? "bg-blue-500 text-white"
                : isDarkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200 text-gray-700"
            }`
          }
        >
          <span className="md:hidden">Market</span>
          <span className="hidden md:inline">Market Page</span>
        </NavLink>
        <NavLink
          to="/custom"
          className={({ isActive }) =>
            `px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md 
            ${
              isActive
                ? "bg-blue-500 text-white"
                : isDarkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200 text-gray-700"
            }`
          }
        >
          <span className="md:hidden">Custom</span>
          <span className="hidden md:inline">Custom Page</span>
        </NavLink>
      </nav>

      <ThemeToggle />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<MarketPage />} />
          <Route path="/custom" element={<CustomPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultDarkMode={false}>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

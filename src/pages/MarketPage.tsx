import React from "react";
import { ThemeProvider, MarketPageWidget, useThemeContext } from "polymarket-ui";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <button onClick={toggleDarkMode} className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-500 text-white rounded-md">
      Toggle {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

const MarketPage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ThemeToggle />
        <MarketPageWidget />
      </div>
    </ThemeProvider>
  );
};

export default MarketPage;

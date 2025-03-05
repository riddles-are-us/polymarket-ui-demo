import React from "react";
import { ThemeProvider, OrderBookWidget, TradingPanelWidget, MarketChartWidget } from "polymarket-ui";

const CustomLayout = () => {
  return (
    <ThemeProvider>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MarketChartWidget />
          <OrderBookWidget />
          <TradingPanelWidget currentPrice={75} maxAmount={1000} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CustomLayout;

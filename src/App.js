import React, { useState } from "react";
import ExchangeRates from "./pages/ExchangeRates/ExchangeRates";
import CryptocurrencyNews from "./pages/CryptocurrencyNews/CryptocurrencyNews";
import Header from "./components/Header/Header";
import Router from "./routes/index";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "./utils/Loader";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Chart } from "react-chartjs-2";
Chart.defaults.font.family = "Open Sans, sans-serif";
Chart.defaults.scale.ticks.color = "#fff";
Chart.defaults.scale.grid.borderColor = "#fff";
Chart.defaults.scale.grid.borderWidth = 3;
Chart.defaults.scale.grid.display = false;

function App() {
  // 0 - ExchangeRates, 1 - CryptocurrencyNews
  const [mode, setMode] = useState(0);

  return (
    <div className="App">
      {/* <ToastContainer {...toastOptions} /> */}
      <React.Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.Suspense>

      {/* <Header mode={mode} setMode={setMode} />
      <div className="container">
        {mode === 0 ? <ExchangeRates /> : <CryptocurrencyNews />}
      </div> */}
    </div>
  );
}

export default App;

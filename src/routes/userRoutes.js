import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ExchangeRates from "../pages/ExchangeRates/ExchangeRates";
import CryptocurrencyNews from "../pages/CryptocurrencyNews/CryptocurrencyNews";
import Home from "../pages/Home.js";
import Navbar from "../components/Navbar/Navbar";
import Loader from "../utils/Loader";
import Coins from "../components/CoinsTable/Coins";
import Coin from "../pages/CoinsTable/Coin";
import axios from "axios";

function AdminRoutes() {
  const [coins, setCoins] = useState([]);

  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Suspense fallback={<Loader active={true} />}>
      <Navbar />
      <Routes>
        <Route exact path="/rates" element={<ExchangeRates />} />
        <Route exact path="/news" element={<CryptocurrencyNews />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/table" element={<Coins coins={coins} />} />
        <Route exact path="/coin" element={<Coin />}>
          <Route exact path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
export default AdminRoutes;

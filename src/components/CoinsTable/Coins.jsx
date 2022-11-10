import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "../../pages/CoinsTable/Coin";
import { Box, Typography } from "@mui/material";
import bgImg from "../../assets/images/bg2.jpg";

const Coins = (props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "55vh",
          backgroundImage: `url(${bgImg})`,
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeigth: "bold",
              color: "white",
              fontSize: "100px",
              textAlign: "center",
            }}
          >
            All Coins Realtime
          </Typography>
        </Box>
      </Box>

      <div className="containner">
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hide-mobile">Volume</p>
            <p className="hide-mobile"> Market Cap</p>
          </div>

          {props.coins.map((coins) => {
            return (
              <Link
                to={`/user/coin/${coins.id}`}
                element={<Coin />}
                key={coins.id}
              >
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Coins;

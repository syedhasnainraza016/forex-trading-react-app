import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import image from "../../assets/images/background2.jpg";
import Button from "@mui/material/Button";
import Card from "./Card";
import Binance from "./Binance";
import Binance2 from "./Binance2";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

function Header() {
  return (
    <Box mt={2}>
      <Grid
        container
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",

          height: "100vh",
        }}
      >
        <Grid container px={4}>
          <Grid item xs={12} md={6} mt={20}>
            <Typography variant="h2" ml={8} color="white">
              Forex Market Prediction
            </Typography>
            <Typography variant="h6" color="white" mt={2} ml={8}>
              Powerful platforms, tight spreads, fast execution, and dedicated
              support. See why we're the trading partner of choice for hundreds
              of thousands of traders worldwide.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4"></Typography>
          </Grid>

          <Grid item xs={12} md={5} ml={7} mt={-4} sx={{ display: "flex" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "200px ",
                height: "40px",
                mt: 3,
                borderRadius: "20px",
                backgroundColor: "#14964f",
              }}
            >
              OPEN AN ACCOUNT
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "220px ",
                height: "40px",
                border: "solid",
                borderColor: "white",

                borderRadius: "20px",
                backgroundColor: "transparent",

                mt: 3,
                ml: 1,
              }}
            >
              Open App
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Card />
      <Binance />
      <Banner />
      <Binance2 />
      <Footer />
    </Box>
  );
}

export default Header;

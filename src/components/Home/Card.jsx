import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

let cards = [
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-market-globalmarketleader-colour.svg?iar=0",
    title: " A trusted global leader",
    disc: " Were part of StoneX Group a Fortune 100 financial giant with revenues exceeding $54 billion",
    disc2:
      " As Americas number 1 broker were fully regulated financially stable and have provided our clients with trading services since 2001",
  },
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-compareplatform-rangeofmarkets-colour.svg?iar=0",
    title: "Elite products, value, and execution",
    disc: "Choose from 80+ products, including forex pairs, unleveraged gold, silver and selected futures, through our affiliate.",
    disc2:
      "Enjoy consistently low trading costs, even in volatile markets – and ultra-fast, quality execution.",
  },
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-openfxaccount-wellprovideyoutools-colour.svg?iar=0",
    title: "Tools designed for your edge",
    disc: "Refine your trading with exclusive data tools like Performance Analytics and SMART Signals. Automate your trading strategies with ease via Capitalise. And take full command of your analysis with industry-leading TradingView charts.",
    disc2: "",
  },
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-meganav-newsandanalysis-colour.svg?iar=0",
    title: "Expert research and analysis",
    disc: "Get fresh trading ideas, smart insights and greater clarity on the latest market action with our proprietary research.",
    disc2: "",
  },
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-support-colour.svg?iar=0",
    title: "A superior customer experience",
    disc: "Access knowledgeable customer support by phone, email or chat, enjoy convenient online account management tools, and experience a personalized service (selected offerings only).",
    disc2: "",
  },
  {
    image:
      "https://www.forex.com/en-us/-/media/project/gain-capital/forex/icons/icon-academyoverview-colour.svg?iar=0",
    title: "Premium education resources",
    disc: "Benefit from informative trading courses, webinars, video tutorials, guides and articles – all designed to boost your market expertise, whatever your experience level.",
    disc2: "",
  },
];

function Card() {
  return (
    <Grid
      container
      mt={-1}
      sx={{ backgroundColor: "#12225C", height: "100%", px: "8%" }}
    >
      <Grid
        item
        xs={12}
        md={12}
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="white">
          Empowering clients since 2001
        </Typography>
        <Typography
          width="70%"
          textAlign="center"
          variant="h5"
          color="white"
          mt={2}
        >
          We live and breathe the markets. Since the turn of the century, we've
          educated traders why to trade to help them realize their ambitions.
          Technical research solely predicts the FOREX market based on a
          company's historical data, in particular, the highest price, lowest
          price, opening price, and closing price of a currency and the volume
          traded on a particular day
        </Typography>
      </Grid>

      <Grid item xs={12} md={12}>
        <Grid container spacing={4} mt={5}>
          {cards.map((card) => {
            return (
              <Grid item md={4}>
                <Grid container xs={12}>
                  <Box
                    sx={{
                      height: "400px",
                      width: "378px",
                      border: "solid",
                      borderColor: "white",
                      borderRadius: "14px",
                      p: 2,
                    }}
                  >
                    <Grid item sx={{ mr: 35 }}>
                      <img src={card?.image} style={{ height: "50px" }} />
                    </Grid>
                    <Grid item sx={{ mt: 4 }}>
                      <Typography variant="h4" color="white">
                        {card?.title}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ mt: 4 }}>
                      <Typography variant="h7" color="white">
                        {card?.disc}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ mt: 2 }}>
                      <Typography variant="h7" color="white">
                        {card?.disc2}
                      </Typography>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Card;

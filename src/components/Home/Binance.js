import { Grid, Card, Typography, Button, Box } from "@mui/material";
import { borderRadius, height } from "@mui/system";
import React from "react";
import image from "../../assets/images/logo1.png";
import nft from "../../assets/images/nft.jpg";
import buss from "../../assets/images/bussin.jpg";
import earn from "../../assets/images/earn.jpg";

function Binance() {
  return (
    <Grid container px={4} pt={5} sx={{ backgroundColor: "#12225C" }}>
      <Grid item ml={18} mt={4}>
        <Typography variant="h3" color="white" py={5}>
          Explore endless possibilities with Binance
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} mt={5}>
        <Card
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fafafa",
            width: "400px",
            height: "600px",
          }}
        >
          <Box
            component="img"
            src={nft}
            sx={{
              height: "300px",
              width: "400px",
              // mx: 1,
              cursor: "pointer",
            }}
          ></Box>
          <Grid item mt={4} mr={3}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Dive into the world of NFTs
            </Typography>
          </Grid>
          <Grid item mt={4} px={3}>
            <Typography
              variant="h7"
              color="black"
              textAlign="center"
              sx={{ mt: 5 }}
            >
              NFTs (non-fungible tokens) are unique cryptographic tokens that
              exist on a blockchain and cannot be replicated. Open rare Mystery
              Boxes, explore IGOs,Fan Tokens,and more with Binance NFT.
            </Typography>
          </Grid>
          <Grid item mr={3}>
            <Button sx={{ color: "#12225C", ml: 30, fontWeight: "bold" }}>
              Learn more
            </Button>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} mt={5}>
        <Card
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fafafa",
            width: "400px",
            height: "600px",
          }}
        >
          <Grid item mt={4} mr={3}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Grow up your business with Forex
            </Typography>
          </Grid>
          <Grid item mt={4} px={3}>
            <Typography
              variant="h7"
              color="black"
              textAlign="center"
              sx={{ mt: 5 }}
            >
              Trade The Markets with Fast Direct Execution at Licensed and
              Regulated Broker XM. Multi Awarded Platforms, 24/7 Support in 30+
              Languages, Trading Platforms For Any Device. Free trading signals.
              $0 fees on withdrawals.
            </Typography>
          </Grid>
          <Grid item mr={3} mb={1}>
            <Button sx={{ color: "#12225C", ml: 30, fontWeight: "bold" }}>
              Learn more
            </Button>
          </Grid>

          <Box
            component="img"
            src={buss}
            sx={{
              height: "300px",
              width: "400px",
              // mx: 1,
              cursor: "pointer",
            }}
          ></Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} mt={5}>
        <Card
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fafafa",
            width: "400px",
            height: "600px",
          }}
        >
          <Box
            component="img"
            src={earn}
            sx={{
              height: "300px",
              width: "400px",
              // mx: 1,
              cursor: "pointer",
            }}
          ></Box>
          <Grid item mt={4} mr={3}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Trade and Earn
            </Typography>
          </Grid>
          <Grid item mt={4} px={3}>
            <Typography
              variant="h7"
              color="black"
              textAlign="center"
              sx={{ mt: 5 }}
            >
              Forex trading may make you rich if you are a hedge fund with deep
              pockets or an unusually skilled currency trader. But for the
              average retail trader, rather than being an easy road to riches
              forex trading can be a rocky highway to enormous losses and
              potential penury.
            </Typography>
          </Grid>
          <Grid item mr={3}>
            <Button
              sx={{ color: "#12225C", ml: 30, mt: 2, fontWeight: "bold" }}
            >
              Learn more
            </Button>
          </Grid>
        </Card>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            color: "white",

            borderRadius: "14px",
            border: "3px solid #FCD535",
            height: "40px",
            width: "200px",
            backgroundColor: "#12225C",
            mr: 5,
            mt: 4,
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Grid>
  );
}

export default Binance;

import { Grid, Typography } from "@mui/material";
import React from "react";
import OnDeviceTrainingRoundedIcon from "@mui/icons-material/OnDeviceTrainingRounded";
import { color } from "@mui/system";
import image from "../../assets/images/logo10.png";
import Button from "@mui/material/Button";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";
import LockClockRoundedIcon from "@mui/icons-material/LockClockRounded";

function Binance2() {
  return (
    <Grid container px={10} py={5} sx={{ backgroundColor: "#12225C" }}>
      <Grid item xs={12} mt={4}>
        <Typography
          variant="h3"
          color="white"
          fontFamily="inherit"
          fontWeight="bold"
          textAlign="center"
        >
          Your trusted crypto exchange
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        mt={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h7" color="white" width="70%" textAlign="center">
          Here we are committed to user protection with strict protocols and
          industry-leading technical measures.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item ml={-65} mt={7}>
          <OnDeviceTrainingRoundedIcon
            sx={{ width: "100px", height: "80px", color: "gold" }}
          />
        </Grid>
        <Grid item mt={-10}>
          <Typography variant="h5" color="white" fontWeight="bold">
            Secure Asset Fund for Users (SAFU)
          </Typography>
          <Typography variant="h7" color="white">
            Binance stores 10% of all trading fees in a secure asset<br></br>{" "}
            fund to protect a share of user funds.
          </Typography>
        </Grid>
        <Grid item ml={-65} mt={7}>
          <PreviewRoundedIcon
            sx={{ width: "100px", height: "80px", color: "gold" }}
          />
        </Grid>
        <Grid item mt={-10}>
          <Typography variant="h5" color="white" fontWeight="bold">
            Personalised Access Control
          </Typography>
          <Typography variant="h7" color="white">
            Advanced access control allows you to restrict devices and <br></br>
            addresses that access your account, for greater ease of mind.
          </Typography>
        </Grid>
        <Grid item ml={-65} mt={7}>
          <LockClockRoundedIcon
            sx={{ width: "100px", height: "80px", color: "gold" }}
          />
        </Grid>
        <Grid item mt={-10}>
          <Typography variant="h5" color="white" fontWeight="bold">
            Advanced Data Encryption
          </Typography>
          <Typography variant="h7" color="white">
            Your transaction data is secured via end-to-end encryption,<br></br>
            ensuring that only you have access to your personal information.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} mt={7} px={4}>
        <img src={image} style={{ width: "100%", height: "300px" }} />
      </Grid>
    </Grid>
  );
}

export default Binance2;

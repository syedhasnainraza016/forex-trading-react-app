import { Box, Typography } from "@mui/material";
import React from "react";
import bgImg from "../../assets/images/img4.jpg";

function Banner() {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
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
          bgcolor: "rgba(18,34,92,0.5)",
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
          Join Forex Today !
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;

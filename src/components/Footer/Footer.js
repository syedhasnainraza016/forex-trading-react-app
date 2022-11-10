import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [about, setAbout] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState([]);

  return (
    <Box
      sx={{
        pt: { xs: 3, md: 0.5 },
        mt: { xs: 0, lg: 0 },
        width: "100%",
      }}
    >
      <Box pr={"6.6%"} pl={"6.6%"}>
        <Box
          component="div"
          sx={{
            height: "1px",
            mt: { lg: 10, xs: 5, md: 8 },
            backgroundColor: "white",
            width: "96%",
          }}
        ></Box>
        <Grid
          container
          sx={{
            mt: { lg: 8, xs: 4, md: 6 },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            sx={{ pr: { lg: 4, xs: 1 }, pl: { lg: 4, xs: 0 } }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "40px !important",
                "@media (max-width: 600px)": {
                  fontSize: "20px !important",
                },
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "white",
                cursor: "pointer",
                // fontFamily: 'Aileron-Regular !important',
                paddingBottom: "2% !important",
                fontSize: "14px !important",

                "@media (min-width: 970px) and (max-width:980px)": {
                  fontSize: "14px !important",
                  marginRight: "12px !important",
                },
                "@media (max-width: 600px)": {
                  fontSize: "10px !important",
                  marginRight: "12px !important",
                },
                "@media (max-width: 400px)": {
                  fontSize: "8px !important",
                },
              }}
            >
              A currency trading platform provides forex market access to
              traders. Some clients prefer brokerages and platforms that give
              them access to all asset classes and integrate trading into a
              single platform. Forex trading is the process of speculating on
              currency prices to potentially make a profit. Currencies are
              traded in pairs, so by exchanging one currency for another, a
              trader is speculating on whether one currency will rise or fall in
              value against the other.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
            <Typography
              sx={{
                pb: { lg: 3 },
                color: "white",
                fontWeight: "bold !important",
                "@media (max-width: 600px)": {
                  fontSize: "10px !important",
                },
              }}
            >
              Services
            </Typography>

            <List>
              <ListItem disablePadding>
                <Typography
                  onClick={() => navigate("/")}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    // fontFamily: 'Aileron-Regular !important',
                    paddingBottom: "2% !important",
                    fontSize: "14px !important",

                    "@media (min-width: 970px) and (max-width:980px)": {
                      fontSize: "14px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "10px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "8px !important",
                    },
                  }}
                >
                  Privacy Policy
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <Typography
                  onClick={() => navigate("/")}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    // fontFamily: 'Aileron-Regular !important',
                    paddingBottom: "2% !important",
                    fontSize: "14px !important",

                    "@media (min-width: 970px) and (max-width:980px)": {
                      fontSize: "14px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "10px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "8px !important",
                    },
                  }}
                >
                  Terms and Conditions
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            sx={{ mt: { xs: 3, sm: 0 } }}
            xs={6}
            sm={4}
            md={4}
            lg={2}
            xl={2}
          >
            <Typography
              sx={{
                pb: { lg: 3 },
                color: "white",
                fontWeight: "bold !important",
                "@media (max-width: 600px)": {
                  fontSize: "10px !important",
                },
              }}
            >
              Contact Us
            </Typography>
            <List>
              <ListItem sx={{ pb: "3% !important" }} disablePadding>
                <ListItemIcon sx={{ minWidth: "40px !important" }}>
                  <CallIcon sx={{ fill: "white" }} />
                </ListItemIcon>
                <Typography
                  // onClick={() => navigate("/")}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    // fontFamily: 'Aileron-Regular !important',
                    paddingBottom: "2% !important",
                    fontSize: "14px !important",

                    "@media (min-width: 970px) and (max-width:980px)": {
                      fontSize: "14px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "10px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "8px !important",
                    },
                  }}
                >
                  "+44 3456237742"
                </Typography>
              </ListItem>
              <ListItem sx={{ pb: "3% !important" }} disablePadding>
                <ListItemIcon sx={{ minWidth: "40px !important" }}>
                  <EmailIcon sx={{ fill: "white" }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    // fontFamily: 'Aileron-Regular !important',
                    paddingBottom: "2% !important",
                    fontSize: "14px !important",

                    "@media (min-width: 970px) and (max-width:980px)": {
                      fontSize: "14px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "10px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "8px !important",
                    },
                  }}
                >
                  "forextraders@gmail.com"
                </Typography>
              </ListItem>
              <ListItem sx={{ pb: "3% !important" }} disablePadding>
                <ListItemIcon sx={{ minWidth: "40px !important" }}>
                  <LocationOnIcon sx={{ fill: "white" }} />
                </ListItemIcon>
                <Typography
                  onClick={() => navigate(contact ? contact[0]?.link : "/")}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    // fontFamily: 'Aileron-Regular !important',
                    paddingBottom: "2% !important",
                    fontSize: "14px !important",

                    "@media (min-width: 970px) and (max-width:980px)": {
                      fontSize: "14px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "10px !important",
                      marginRight: "12px !important",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "8px !important",
                    },
                  }}
                >
                  Find a store
                </Typography>
              </ListItem>
              <ListItem sx={{ mt: 7 }}>
                <Box
                  display="flex"
                  justifyContent={"flex-end"}
                  pb={4}
                  // sx={{ mr: "5%" }}
                  // pr={20}
                >
                  <Box
                    display="flex"
                    justifyContent={"flex-start"}
                    sx={{ ml: { lg: "-12px" } }}
                  >
                    <InstagramIcon
                      sx={{ fill: "white", mr: 1, cursor: "pointer" }}
                    />
                    <TwitterIcon
                      sx={{ fill: "white", mr: 1, cursor: "pointer" }}
                    />
                    <FacebookIcon
                      sx={{ fill: "white", mr: 1, cursor: "pointer" }}
                    />
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;

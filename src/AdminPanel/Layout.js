import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
// import userProfile from "../../../assets/images/userProfile.png";
// import { toast } from "react-toastify";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     let user = JSON.parse(localStorage.getItem("user"));
  //     setUser(user);
  //   }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Tabs = [
    { title: "Email/Password", to: "/profile" },
    { title: "My Purchases", to: "/my-purchases" },
    { title: "My Bids", to: "/my-bids" },
    { title: "Watching Bids", to: "/watching-bids" },
    { title: "Payment Gateway", to: "/payment-gateways" },
  ];

  //   function Logout() {
  //     AuthAPI.logout().then((res) => {
  //       localStorage.removeItem("user");
  //       toast.success("Logout Successfully");
  //       navigate("/");
  //     });
  //   }
  const drawer = (
    <Box className={"buyerBg"} sx={{ py: { xs: 2, md: 5 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Box>
          <Box component="img" src={userImg}></Box>
        </Box> */}

        <Button
          variant="contained"
          // disabled
          sx={{
            backgroundColor: "#FFB51342",
            color: "white",
            border: "2px solid #FFB501 ",
            width: { xs: "50%", md: "10%" },
            "&:hover": {
              // transform: "scale(1.1)",
              bgcolor: "#FFB501",
            },
            fontSize: 11,
          }}
        >
          Admin
        </Button>
      </Box>
      <List>
        {Tabs.map((tab, index) => (
          <ListItem
            onClick={() => navigate(`/buyer${tab.to}`)}
            key={tab.title}
            disablePadding
            sx={{
              px: location?.pathname === `/buyer${tab.to}` ? "30px" : "none",
            }}
          >
            <ListItemButton>
              {/* {console.log("PATHNAMEE", location.pathname, tab.to)} */}
              <ListItemText
                fontFamily="Raleway, sans-serif"
                sx={{
                  textAlign: "center",
                  color: "#005371",
                  fontWeight: 800,
                  borderBottom:
                    location?.pathname === `/buyer${tab.to}`
                      ? "4px solid white"
                      : "none",
                }}
                primary={tab.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB501",
            color: "white",
            width: { xs: "50%", md: "30%" },
            "&:hover": {
              // transform: "scale(1.1)",
              bgcolor: "#FFB501",
            },
            fontSize: 11,
          }}
          //   onClick={() => Logout()}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <CssBaseline />

      <Box sx={{ display: "flex", justifyContent: "flex-start " }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, pl: 4 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: " #7ad7ff !important",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          bgcolor: "#7ad7ff",
          position: "sticky",
          height: "100vh",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <Box
          // component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 0, md: 7 },
            pt: { xs: 0, md: 2 },
            width: { sm: "100%" },
          }}
        >
          {/* <Toolbar /> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

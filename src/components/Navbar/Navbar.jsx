import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid, List, ListItem, Link } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "HOME", to: "/home" },
  { name: "Coins Table", to: "/table" },
  { name: "Exchange Rates", to: "/rates" },
  { name: "Crypto News", to: "/news" },
  { name: "Courses", to: "/courses" },
  { name: "Prediction", to: "/predict" },
];
const settings = ["Dashboard"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    if (JSON.parse(localStorage.getItem("user"))?.role == "admin") {
      navigate("/admin/article");
    }
    if (JSON.parse(localStorage.getItem("user"))?.role == "user") {
      navigate("/buyer/my-courses");
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(17, 33, 92, 1)",
        zIndex: 10,
        boxShadow: "none !important",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page?.name} onClick={() => navigate(page.to)}>
                  <Typography textAlign="center">{page?.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Grid container display="flex">
            <Grid item xs={6} md={4} lg={4}>
              {JSON.parse(localStorage.getItem("user"))?.role ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate(`/auth/signin`);
                  }}
                  sx={{
                    my: 2,
                    color: "rgba(17, 33, 92, 1)",
                    bgcolor: "white",
                    display: "block",
                    fontWeight: "bold",
                    // fontFamily: "Port Lligat Sans",
                    fontSize: { md: "16px" },
                    fontWeight: 400,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "red",
                      color: "white",
                    },
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    navigate(`/auth/signin`);
                  }}
                  sx={{
                    my: 2,
                    color: "rgba(17, 33, 92, 1)",
                    bgcolor: "white",
                    display: "block",
                    fontWeight: "bold",
                    // fontFamily: "Port Lligat Sans",
                    fontSize: { md: "16px" },
                    fontWeight: 400,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "red",
                      color: "white",
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Grid>
            <Grid
              item
              xs={6}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page?.name}
                    // onClick={handleCloseNavMenu}
                    onClick={() => navigate(`/user${page.to}`)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: "bold",
                      // fontFamily: "Port Lligat Sans",
                      fontSize: { md: "16px" },
                      fontWeight: 400,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    {page?.name}
                  </Button>
                ))}
              </Box>

              {JSON.parse(localStorage.getItem("user"))?.role && (
                <Box
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    justifyContent: { xs: "flex-end", md: "center" },
                  }}
                >
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, mx: { xs: 0, md: 2 } }}
                    >
                      <AccountCircleSharpIcon
                        sx={{ fontSize: { xs: 30, md: 40 }, color: "white" }}
                      />
                      {/* <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    /> */}
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

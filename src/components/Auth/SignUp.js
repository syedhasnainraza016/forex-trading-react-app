import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  Input,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import bgImg from "../../assets/images/img1.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import { AuthAPI, GenralAPI } from "../../api";

function SignUp() {
  let Navigate = useNavigate();
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [con_values, setConValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConPassword = () => {
    setConValues({
      ...con_values,
      showPassword: !con_values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    username: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = (values) => {
    // AuthAPI.register(values).then((res) => {
    //   Navigate("/auth/signin");
    // });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 0,
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          //   top: 0,
          // bgcolor: "rgba(61,197,255,0.3)",
          bgcolor: "rgba(0,0,0,0.2)",
        }}
      >
        <Grid container>
          <Grid
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={0}
            md={6}
          ></Grid>
          <Grid
            item
            sx={{
              height: { xs: "100%", md: "100vh" },
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            md={6}
          >
            <Box
              component="form"
              sx={{
                overflowY: "scroll",
                // bgcolor: "rgba(61,197,255,0.88)",
                bgcolor: "rgba(0,88,163,0.88)",
                width: { xs: "100%", md: "450px" },
                height: { xs: "100%", md: "75vh" },
                borderRadius: { xs: 0, md: "22px" },
                display: "flex",
                flexDirection: "coulmn",
                justifyContent: "center",
                alignItems: "center",
                // py: 2,
                "&::-webkit-scrollbar": {
                  width: "0px",
                },
                "&::-webkit-scrollbar-track": {
                  boxShadow: "inset 0 0 0px #B9EDFF",
                  webkitBoxShadow: "inset 0 0 0px #26B3F0",
                  border: "0px solid #26B3F0",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#26B3F0",
                  outline: "0px solid slategrey",
                },
              }}
            >
              <Grid sx={{ pt: 4, px: { xs: 4, md: 8 } }} container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CloseIcon
                            onClick={() => {
                              setText("");
                            }}
                            sx={{ fill: "red", pr: 1, cursor: "pointer" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins",
                      ".MuiInputBase-input": {
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        padding: 0,
                        pb: 1,
                        pl: 2,
                        color: "white",
                        textAlign: "left",
                        "::placeholder": {
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "rgba(255,255,255,1) !important",

                          textAlign: "left",
                        },
                      },
                      ".MuiInput-underline": {
                        "::before": {
                          borderBottom: "2px solid #fff !important",
                        },
                      },
                      ".MuiOutlinedInput-root ": {
                        py: "12px !important",
                        // px: "72px !important",
                        borderRadius: "8px !important",
                        textAlign: "left",
                        bgcolor: "#26B3F0",
                        boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.4)",
                      },
                      borderRadius: "5px !important",
                      color: "white",
                      textAlign: "center",
                    }}
                    placeholder="Enter Your Email Here"
                    variant="standard"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CloseIcon
                            sx={{ fill: "red", pr: 1, cursor: "pointer" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins",
                      ".MuiInputBase-input": {
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        padding: 0,
                        pb: 1,
                        pl: 2,
                        color: "white",
                        textAlign: "left",
                        "::placeholder": {
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "rgba(255,255,255,1) !important",

                          textAlign: "left",
                        },
                      },
                      ".MuiInput-underline": {
                        "::before": {
                          borderBottom: "2px solid #fff !important",
                        },
                      },
                      ".MuiOutlinedInput-root ": {
                        py: "12px !important",
                        // px: "72px !important",
                        borderRadius: "8px !important",
                        textAlign: "left",
                        bgcolor: "#26B3F0",
                        boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.4)",
                      },
                      borderRadius: "5px !important",
                      color: "white",
                      textAlign: "center",
                    }}
                    placeholder="Enter Your Username"
                    variant="standard"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins",
                      ".MuiInputBase-input": {
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        padding: 0,
                        pb: 1,
                        pl: 2,
                        color: "white",
                        textAlign: "left",
                        "::placeholder": {
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "rgba(255,255,255,1) !important",

                          textAlign: "left",
                        },
                      },
                      ".MuiInput-underline": {
                        "::before": {
                          borderBottom: "2px solid #fff !important",
                        },
                      },
                      ".MuiOutlinedInput-root ": {
                        py: "12px !important",
                        // px: "72px !important",
                        borderRadius: "8px !important",
                        textAlign: "left",
                        bgcolor: "#26B3F0",
                        boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.4)",
                      },
                      borderRadius: "5px !important",
                      color: "white",
                      textAlign: "center",
                    }}
                    variant="standard"
                  >
                    <Input
                      placeholder="Password"
                      id="standard-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            sx={{ color: "white" }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins",
                      ".MuiInputBase-input": {
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        padding: 0,
                        pb: 1,
                        pl: 2,
                        color: "white",
                        textAlign: "left",
                        "::placeholder": {
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "rgba(255,255,255,1) !important",

                          textAlign: "left",
                        },
                      },
                      ".MuiInput-underline": {
                        "::before": {
                          borderBottom: "2px solid #fff !important",
                        },
                      },
                      ".MuiOutlinedInput-root ": {
                        py: "12px !important",
                        // px: "72px !important",
                        borderRadius: "8px !important",
                        textAlign: "left",
                        bgcolor: "#26B3F0",
                        boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.4)",
                      },
                      borderRadius: "5px !important",
                      color: "white",
                      textAlign: "center",
                    }}
                    variant="standard"
                  >
                    <Input
                      placeholder="Confirm Password"
                      id="standard-adornment-password"
                      type={con_values.showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            sx={{ color: "white" }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConPassword}
                            onMouseDown={handleMouseDownConPassword}
                          >
                            {con_values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      name="password_confirmation"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password_confirmation &&
                        Boolean(formik.errors.password_confirmation)
                      }
                      helperText={
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={formik.handleSubmit}
                    type="submit"
                    variant="contained"
                    sx={{
                      fontFamily: "poppins",
                      boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.2)",
                      px: 3,
                      borderRadius: "10px",
                      textTransform: "none",
                      height: "58px",
                      backgroundColor: "#58E6FF",
                      color: "white",
                      width: { xs: "100%" },
                      "&:hover": {
                        transform: "scale(1.01)",
                        bgcolor: "#FFB501",
                      },
                      fontSize: 20,
                    }}
                  >
                    SignUp
                  </Button>
                </Grid>

                <Grid
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                >
                  {/* <Box
                    component="img"
                    src={google}
                    sx={{
                      height: "40px",
                      width: "40px",
                      mx: 1,
                      cursor: "pointer",
                    }}
                  ></Box> */}
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  xs={12}
                >
                  <Typography
                    sx={{
                      // width: "100%",
                      fontFamily: "poppins",
                      color: "#fff",
                      py: 2,
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                  >
                    Already have an account?
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      // width: "100%",
                      fontFamily: "poppins",
                      py: 2,
                      textAlign: "center",
                      fontSize: "16px",
                      ml: 1,
                    }}
                    onClick={() => Navigate("/auth/signin")}
                  >
                    SignIn
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUp;

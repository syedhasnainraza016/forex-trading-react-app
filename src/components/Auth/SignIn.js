import React from "react";
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
import bgImg from "../../assets/images/bg1.jpg";
// import buyerBtn from "../../assets/images/buyerBtn.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthAPI } from "../../api";
import Swal from "sweetalert2";

function SignIn() {
  let Navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    AuthAPI.login(values).then((res) => {
      let response = res.data.data;
      let user = {
        access_token: response?.token,
        id: response?.user?._id,
        email: response?.user?.email,
        role: response?.user?.role,
        name: response?.user?.username,
      };
      localStorage.setItem("user", JSON.stringify(user));
      if (response?.user?.role === "user") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 3500,
        });

        Navigate("/user/home");
      } else if (response?.user?.role === "admin") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 3500,
        });
        Navigate("/admin/article");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid User",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
          bgcolor: "rgba(0,0,0,0.2)",
        }}
      >
        <Grid container>
          <Grid
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={12}
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
              position: "relative",
            }}
            md={6}
          >
            <Box
              component="form"
              sx={{
                position: "relative",
                bgcolor: "rgba(3,4,6,0.75)",
                // bgcolor: "rgba(0,88,163,0.88)",
                width: { xs: "100%", md: "450px" },
                height: { xs: "100%", md: "75vh" },
                borderRadius: { xs: 0, md: "22px" },
                // zIndex: 5,
                display: "flex",
                flexDirection: "coulmn",
                justifyContent: "center",
                alignItems: "center",
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
              <Box
                sx={{
                  width: "150px",
                  height: "50px",
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                  bgcolor: "rgba(17, 33, 92, 1)",
                  borderRadius: "14px",
                  color: "white",
                  backgroundSize: "cover",
                  // backgroundImage: `url(${buyerBtn})`,
                  top: -23,
                  left: -40,
                  zIndex: 10,
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    fontFamily: "poppins",
                    color: "#fff",
                    py: 2,
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  SignIn
                </Typography>
              </Box>
              <Grid sx={{ pt: 10, px: { xs: 4, md: 8 } }} container spacing={2}>
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
                    placeholder="Enter Your Email"
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
                <Grid xs={12}>
                  {/* <Typography
                    sx={{
                      width: "100%",
                      fontFamily: "poppins",
                      color: "#fff",
                      py: 2,
                      textAlign: "right",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                    onClick={() => Navigate("/auth/forget-password")}
                  >
                    Forget password ?
                  </Typography> */}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "poppins",
                      boxShadow: "0 8px 6px -2px rgba(0, 0, 0, 0.2)",
                      px: 3,
                      borderRadius: "10px",
                      textTransform: "none",
                      height: "58px",
                      backgroundColor: "rgba(17, 33, 92, 1)",
                      color: "white",
                      width: { xs: "100%" },
                      "&:hover": {
                        transform: "scale(1.01)",
                        bgcolor: "#FFB501",
                      },
                      fontSize: 20,
                    }}
                    onClick={formik.handleSubmit}
                    // onClick={() => Navigate("/user/home")}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid xs={12}>
                  {/* <Typography
                    sx={{
                      width: "100%",
                      fontFamily: "poppins",
                      color: "#fff",
                      py: 2,
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                  >
                    Or Sign in with your social Accounts
                  </Typography> */}
                </Grid>
                {/* <Grid
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                >
                  <Box
                    component="img"
                    src={google}
                    sx={{
                      height: "40px",
                      width: "40px",
                      mx: 1,
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    component="img"
                    src={fb}
                    sx={{
                      height: "40px",
                      width: "40px",
                      mx: 1,
                      cursor: "pointer",
                    }}
                  ></Box>
                </Grid> */}
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
                    Do not have an account?
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
                    onClick={() => Navigate("/auth/signup")}
                  >
                    Signup
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

export default SignIn;

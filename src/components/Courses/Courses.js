import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Card } from "@mui/material";
import bgImg from "../../assets/images/bg2.jpg";
import { CourseAPI } from "../../api";
import BuyModal from "./BuyModal";
import { BatteryUnknownOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import lock from "../../assets/images/lock2.jpg";
import locked from "../../assets/images/lock-icon.png";

const Course = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [createDialog, setCreateDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    CourseAPI.allCourse().then((res) => setData(res?.data?.data));
  }, []);
  function buyNow() {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    let buyer_id = user.id;
    if (buyer_id) {
      let data = {
        title: selectedCourse.title,
        price: selectedCourse.price,
        code: selectedCourse.code,
        duration: selectedCourse.duration,
        buyer_id,
      };
      CourseAPI.buyCourse(data).then((res) => console.log("res", res));
    } else {
      console.log("login first");
    }
  }

  function clicked(item) {
    setCreateDialog(true);
    setSelectedCourse(item);
  }
  return (
    <Box>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "55vh",
          backgroundImage: `url(${bgImg})`,
          width: "100%",
          // position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // position: "absolute",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
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
            Buy Your Course Now
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container px={4} py={5} sx={{ backgroundColor: "#12225C" }}>
          <Grid item xs={12} ml={18} mt={4}>
            <Typography variant="h3" textAlign="center" color="white" py={5}>
              Avaliable Courses
            </Typography>
          </Grid>
          {data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <Grid item xs={12} md={4} mt={5} position="relative">
                  <Card
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#fafafa",
                      width: "400px",
                      height: "450px",
                    }}
                  >
                    {!user && (
                      <Box
                        component="img"
                        src={locked}
                        sx={{
                          bgcolor: "rgba(255,255,255,0.5)",
                          height: "230px",
                          width: "400px",
                          // mx: 1,
                          zIndex: 1000,
                          cursor: "pointer",
                          position: "absolute",
                          top: 0,
                          borderTopRightRadius: "20px",
                          borderTopLeftRadius: "20px",
                        }}
                      ></Box>
                    )}
                    <Box
                      component="img"
                      // src={locked}
                      src={`http://localhost:4000/uploads/images/${item?.image}`}
                      sx={{
                        height: "230px",
                        width: "400px",
                        zIndex: 1,
                        // mx: 1,
                        cursor: "pointer",
                        // position: "absolute",
                        // top: 0,
                      }}
                    ></Box>

                    <Grid item mt={1} mr={3}>
                      <Typography
                        variant="h4"
                        color="black"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        color="black"
                        sx={{
                          //   fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Price: {item?.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        color="black"
                        sx={{
                          //   fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Code: {item?.code}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        color="black"
                        sx={{
                          //   fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Duration: {item?.duration}
                      </Typography>
                    </Grid>
                    {/* <Grid item>
                      <Typography
                        variant="h6"
                        color="black"
                        // textAlign="center"
                        // sx={{ mt: 5 }}
                      >
                        {item?.description}
                      </Typography>
                    </Grid> */}
                    <Grid
                      item
                      py={3}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        sx={{
                          width: "100px",
                          bgcolor: "#12225C",
                          color: "white",
                          //   ml: 35,
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          user
                            ? clicked(item)
                            : Swal.fire({
                                position: "center",
                                icon: "warning",
                                title: "Please Login First",
                                showConfirmButton: false,
                                timer: 3500,
                              });
                        }}
                      >
                        Buy Now
                      </Button>
                    </Grid>
                  </Card>
                  <BuyModal
                    onClose={() => setCreateDialog(false)}
                    open={createDialog}
                    afterSubmit={() =>
                      // console.log("selectedCourse", selectedCourse)
                      buyNow()
                    }
                  />
                </Grid>
              );
            })
          ) : (
            <Typography textAlign="center">No Course Avaliable</Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Course;

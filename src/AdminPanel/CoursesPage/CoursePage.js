import React, { useState, useEffect } from "react";
import Table from "../../utils/Table";
import Button from "../../utils/Button";
import AddIcon from "@mui/icons-material/Add";
import AddCourseModal from "./AddCourseModal";
import { CourseAPI } from "../../api";
import { Avatar, Typography, Box } from "@mui/material";
function CoursePage() {
  const [data, setData] = useState([]);
  const [createDialog, setCreateDialog] = useState(false);
  useEffect(() => {
    CourseAPI.allCourse().then((res) => setData(res?.data?.data));
  }, [createDialog]);
  const columns = [
    { Header: "Sr #", accessor: "_id" },

    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "Code",
      accessor: "code",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: ({ value }) =>
        value ? (
          <Avatar
            variant="rounded"
            alt="car"
            src={`http://localhost:4000/uploads/images/${value}`}
          />
        ) : (
          <Typography variant="body1" color="red">
            No Image
          </Typography>
        ),
    },
  ];

  const deleteCourse = (id) => {
    CourseAPI.deleteCourse({ id: id }).then(() => {
      CourseAPI.allCourse().then((res) => setData(res.data.data));
    });
  };
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button
          sx={{
            bgcolor: "#FFB51342",
            border: "2px solid #FFB501",
          }}
          title="Add Course"
          EndIcon={AddIcon}
          onClick={() => setCreateDialog(true)}
        />
      </Box>
      <Table columns={columns} data={data} remove={deleteCourse} />
      <AddCourseModal
        onClose={() => setCreateDialog(false)}
        open={createDialog}
        afterSubmit={() => console.log("ok")}
      />
    </Box>
  );
}

export default CoursePage;

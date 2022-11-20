import React, { useState, useEffect } from "react";
import Table from "../../utils/Table";
import Button from "../../utils/Button";
import AddIcon from "@mui/icons-material/Add";
import { CourseAPI } from "../../api";
import { Avatar, Typography, Box } from "@mui/material";
function NewsPage() {
  const [data, setData] = useState([]);
  const [createDialog, setCreateDialog] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let user_id = user.id;
    CourseAPI.getbuyerCourses(user_id).then((res) => setData(res.data.data));
  }, []);
  const columns = [
    // { Header: "Sr #", accessor: "_id" },

    {
      Header: "Course Title",
      accessor: "title",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Course Code",
      accessor: "code",
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
    },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Table columns={columns} data={data} />
    </Box>
  );
}

export default NewsPage;

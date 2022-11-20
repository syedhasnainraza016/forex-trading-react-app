import React, { useState, useEffect } from "react";
import Table from "../../utils/Table";
import Button from "../../utils/Button";
import AddIcon from "@mui/icons-material/Add";
import { AuthAPI } from "../../api";
import { Avatar, Typography, Box } from "@mui/material";
function NewsPage() {
  const [data, setData] = useState([]);
  const [createDialog, setCreateDialog] = useState(false);
  useEffect(() => {
    AuthAPI.getusers().then((res) => setData(res.data.data));
  }, [createDialog]);
  const columns = [
    // { Header: "Sr #", accessor: "_id" },

    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "User Name",
      accessor: "username",
    },
    {
      Header: "Role",
      accessor: "role",
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

import React, { useState, useEffect } from "react";
import Table from "../../utils/Table";
import Button from "../../utils/Button";
import AddIcon from "@mui/icons-material/Add";
import AddNewsModal from "./AddNewsModal";
import { NewsAPI } from "../../api";
import { Avatar, Typography, Box } from "@mui/material";
function NewsPage() {
  const [data, setData] = useState([]);
  const [createDialog, setCreateDialog] = useState(false);
  useEffect(() => {
    NewsAPI.allNews().then((res) => setData(res.data.data));
  }, []);
  const columns = [
    { Header: "Sr #", accessor: "_id" },

    {
      Header: "News",
      accessor: "title",
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

  const deleteNews = (id) => {
    NewsAPI.deleteNews({ id: id }).then(() => {
      NewsAPI.allNews().then((res) => setData(res.data.data));
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
          title="Add News"
          EndIcon={AddIcon}
          onClick={() => setCreateDialog(true)}
        />
      </Box>
      <Table columns={columns} data={data} remove={deleteNews} />
      <AddNewsModal
        onClose={() => setCreateDialog(false)}
        open={createDialog}
        afterSubmit={() => console.log("ok")}
      />
    </Box>
  );
}

export default NewsPage;

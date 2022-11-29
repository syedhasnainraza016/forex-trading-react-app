import React, { useState, useEffect } from "react";
import Table from "../../utils/Table";
import Button from "../../utils/Button";
import AddIcon from "@mui/icons-material/Add";
import AddArticleModal from "./AddArticleModal";
import { ArticleAPI } from "../../api";
import { Avatar, Typography, Box } from "@mui/material";
function ArticlePage() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [createDialog, setCreateDialog] = useState(false);
  useEffect(() => {
    ArticleAPI.allArticle().then((res) => setData(res.data.data));
  }, [createDialog]);
  const columns = [
    { Header: "Sr #", accessor: "_id" },

    {
      Header: "Article Title",
      accessor: "title",
    },
    {
      Header: "Article Description",
      accessor: "description",
    },
  ];

  const deleteArticle = (id) => {
    ArticleAPI.deleteArticle({ id: id }).then(() => {
      ArticleAPI.allArticle().then((res) => setData(res.data.data));
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
          title="Add Article"
          EndIcon={AddIcon}
          onClick={() => setCreateDialog(true)}
        />
      </Box>
      <Table
        columns={columns}
        data={data}
        edit={(id) => {
          setEditId(id);
          setCreateDialog(true);
        }}
        remove={deleteArticle}
      />
      <AddArticleModal
        onClose={() => setCreateDialog(false)}
        open={createDialog}
        afterSubmit={() => console.log("ok")}
      />
    </Box>
  );
}

export default ArticlePage;

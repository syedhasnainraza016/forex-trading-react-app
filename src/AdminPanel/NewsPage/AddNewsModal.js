import React, { useState, useEffect } from "react";
import BasicModal from "../../utils/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import FileInput from "../../utils/FileUpload";
import TextInput from "../../utils/Textfield";
import { NewsAPI } from "../../api";

const initialValues = {
  title: "",
  image: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.mixed().required("Please provide description."),
});

function AddCarTypeModal({ open, onClose, afterSubmit }) {
  const [isActive, setActive] = useState(false);
  const [imagesArr, setImagesArr] = useState(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function handleImage(event) {
    setImagesArr(event.target.files[0]);
  }

  function onSubmit(values) {
    setActive(true);
    console.log("news imagesArr", imagesArr);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("image", imagesArr);
    formData.append("description", values.description);
    NewsAPI.addNews(formData).then((res) => console.log("created"));
    onClose();
  }

  return (
    <>
      <BasicModal
        title="Add News"
        open={open}
        // onClose={onClose}
        onClose={() => {
          formik.resetForm();
          onClose();
        }}
        cancel={() => formik.resetForm()}
        ok={formik.submitForm}
        okText="Submit"
        active={isActive}
      >
        <Box component="form" onSubmit={formik.handleSubmit}>
          <TextInput formik={formik} name="title" label="Title" />

          <TextInput
            formik={formik}
            name="description"
            label="Description"
            multiline
            disc
            rows={3}
          />
          <input type="file" className="upload" onChange={handleImage} />

          {/* <FileInput setImages={setImagesArr} /> */}
        </Box>
      </BasicModal>
    </>
  );
}

export default AddCarTypeModal;

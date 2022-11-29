import React, { useState, useEffect } from "react";
import BasicModal from "../../utils/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import TextInput from "../../utils/Textfield";
import { ArticleAPI } from "../../api";

const initialValues = {
  title: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.mixed().required("Please provide description."),
});

function EditModal({ initialData, open, onClose, afterSubmit }) {
  const [isActive, setActive] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    console.log("initialData", initialData);
    if (initialData) {
      formik.setFieldValue("title", initialData.title);
      formik.setFieldValue("description", initialData.description);
    }
  }, [initialData, open]);

  function onSubmit(values) {
    setActive(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    ArticleAPI.editArticle(initialData._id, formData).then((res) =>
      console.log("created")
    );
    onClose();
  }

  return (
    <>
      <BasicModal
        title="Edit Article"
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
            rows={12}
          />
        </Box>
      </BasicModal>
    </>
  );
}

export default EditModal;

import React, { useState, useEffect } from "react";
import BasicModal from "../../utils/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import TextInput from "../../utils/Textfield";
// import { NewsAPI } from "../../api";

// const initialValues = {
//   title: "",
//   description: "",
// };

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   description: Yup.mixed().required("Please provide description."),
// });

function AddModal({ open, onClose, afterSubmit }) {
  const [isActive, setActive] = useState(false);
  //   const [imagesArr, setImagesArr] = useState(null);

  //   const formik = useFormik({
  //     initialValues,
  //     validationSchema,
  //     onSubmit,
  //   });

  //   function handleImage(event) {
  //     setImagesArr(event.target.files[0]);
  //   }

  function onSubmit(values) {
    setActive(true);
    afterSubmit();
    // console.log("news imagesArr", imagesArr);
    // const formData = new FormData();
    // formData.append("title", values.title);
    // formData.append("image", imagesArr);
    // formData.append("description", values.description);
    // NewsAPI.addNews(formData).then((res) => console.log("created"));
    onClose();
  }

  return (
    <>
      <BasicModal
        title="Buy Course"
        open={open}
        // onClose={onClose}
        cancelText="Cancel"
        onClose={() => {
          //   formik.resetForm();
          onClose();
        }}
        // cancel={() => formik.resetForm()}
        ok={onSubmit}
        okText="Confirm"
        active={isActive}
      >
        <Box component="form" onSubmit={onSubmit}>
          <TextInput
            required={true}
            name="Enter Card Name"
            placeholder="Visa/Master Card"
            label="Enter Card Name"
          />

          <TextInput
            required={true}
            name="number"
            label="Card Number"
            placeholder="4343-4343-4343-4343"
          />
        </Box>
      </BasicModal>
    </>
  );
}

export default AddModal;

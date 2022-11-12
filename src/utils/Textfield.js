import React from "react";
import { TextField } from "@mui/material";

function TextInput({
  size,
  formik,
  label = "",
  name,
  limit,
  noValidationText,
  sx,
  disc,
  dislimit,
  ...props
}) {
  return (
    <TextField
      variant="outlined"
      size={size ? size : "small"}
      fullWidth
      id={name}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      inputProps={{ maxLength: disc ? 500 : 350 }}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={
        !noValidationText && formik.touched[name] && formik.errors[name]
      }
      sx={{ my: 1, ...sx }}
      {...props}
    />
  );
}

export default TextInput;

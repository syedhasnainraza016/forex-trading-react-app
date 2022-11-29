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
  required,
  ...props
}) {
  return (
    <TextField
      required={required ? true : false}
      variant="outlined"
      size={size ? size : "small"}
      fullWidth
      id={name}
      name={name}
      label={label}
      value={formik?.values[name]}
      onChange={formik?.handleChange}
      onBlur={formik?.handleBlur}
      inputProps={{ maxLength: disc ? 3000 : 3000 }}
      error={formik?.touched[name] && Boolean(formik?.errors[name])}
      helperText={
        !noValidationText && formik?.touched[name] && formik?.errors[name]
      }
      sx={{ my: 1, ...sx }}
      {...props}
    />
  );
}

export default TextInput;

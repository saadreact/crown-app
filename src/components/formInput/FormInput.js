import React from "react";
import "./FormInput.scss";
import TextField from "@mui/material/TextField";

const FormInput = ({
  handleChange,
  name,
  id,
  value,
  label,
  required,
  error,
  helperText,
  ...otherProps
}) => {
  return (
    <div className="group">
      <TextField
        name={name}
        id={id}
        label={label}
        value={value}
        variant="standard"
        error={error}
        fullWidth
        helperText={helperText}
        required={required}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;

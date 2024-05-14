/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { InputState, ReusableInputs } from "./types";
import { IconButton, Input, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function ReusableInput({
  name,
  placeholder,
  type,
  formik,
  defaultValue,
  label,
  required,
}: ReusableInputs) {
  const [values, setValues] = useState<InputState>({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputProps: any = {};
  if (type === "date") {
    inputProps["max"] = new Date().toISOString().split("T")[0];
  }
  return (
    <div>
      <label className="label">{label}</label>
      <Input
        className="form-control"
        onChange={formik.handleChange}
        placeholder={placeholder}
        fullWidth
        autoComplete={
          type === "password"
            ? values.showPassword
              ? "current-text"
              : "current-password"
            : `current-${type}`
        }
        name={name}
        value={formik.values[name]}
        defaultValue={defaultValue}
        type={
          type === "password"
            ? values.showPassword
              ? "text"
              : "password"
            : type
        }
        id="input"
        required={required ? required : false}
        endAdornment={
          <InputAdornment position="start">
            {name === "password" && (
              // name === "confirmPassword"
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                size="small"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
          </InputAdornment>
        }
        inputProps={inputProps}
      />
    </div>
  );
}

export default ReusableInput;

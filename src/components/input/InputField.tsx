"use client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = ({
  label,
  type,
  icon,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type: string;
  icon?: JSX.Element;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type === "password" && showPassword ? "text" : type}
      slotProps={{
        input: {
          style: { padding: "10px" },
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        },
      }}
      sx={{ mb: 2 }}
    />
  );
};

export default InputField;

import { Typography } from "@mui/material";
import React from "react";

interface SubtitleProps {
  children: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Typography variant="h4" fontWeight={700} gutterBottom>
      {children}
    </Typography>
  );
};

export default Subtitle;

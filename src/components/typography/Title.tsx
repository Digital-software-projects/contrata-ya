import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        maxWidth: 928,
        textAlign: "center",
        margin: "0 auto",
        marginBottom: 2,
        typography: { xs: "h4", md: "h3" },
      }}
      fontWeight="bold"
    >
      {children}
    </Typography>
  );
};

export default Title;

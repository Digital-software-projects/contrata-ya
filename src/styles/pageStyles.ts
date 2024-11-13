import { SxProps, Theme } from "@mui/material/styles";

export const pageStyles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
};

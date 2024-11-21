"use client";
import { createTheme } from "@mui/material/styles";
import { COLORS, FONT_FAMILY } from "./constants";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_MAIN,
      light: COLORS.PRIMARY_LIGHT,
      dark: COLORS.PRIMARY_DARK,
    },
    secondary: {
      main: COLORS.SECONDARY_MAIN,
      light: COLORS.SECONDARY_LIGHT,
      contrastText: COLORS.BLACK,
    },
    background: {
      default: COLORS.WHITE,
    },
    success: {
      main: COLORS.SUCCESS_MAIN,
    },
    warning: {
      main: COLORS.WARNING_MAIN,
    },
    error: {
      main: COLORS.ERROR_MAIN,
    },
  },
  typography: {
    allVariants: {
      color: COLORS.BLACK,
      wordWrap: "break-word",
      wordBreak: "break-word",
    },
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    h1: {
      fontFamily: FONT_FAMILY,
      fontSize: "36px",
      fontWeight: 600,
    },
    h2: {
      fontFamily: FONT_FAMILY,
      fontSize: "24px",
      fontWeight: 600,
    },
    h3: {
      fontFamily: FONT_FAMILY,
      fontSize: "20px",
      fontWeight: 600,
    },
    h4: { fontFamily: FONT_FAMILY, fontWeight: 600 },
    h5: { fontFamily: FONT_FAMILY, fontWeight: 600 },
    h6: { fontFamily: FONT_FAMILY, fontWeight: 600 },
    body1: {
      fontFamily: FONT_FAMILY,
      fontSize: "18px",
      fontWeight: 400,
    },
    body2: {
      fontFamily: FONT_FAMILY,
      fontSize: "16px",
      fontWeight: 300,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY,
      fontSize: "18px",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: FONT_FAMILY,
      fontSize: "18px",
      fontWeight: 500,
    },
    caption: {
      fontFamily: FONT_FAMILY,
      fontSize: "14px",
      fontWeight: 300,
    },
    button: {
      fontFamily: FONT_FAMILY,
      fontSize: "18px",
      fontWeight: 500,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          overflowX: "hidden",
          marginTop: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
          background: COLORS.WHITE,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "60px",
          paddingRight: "60px",
          borderRadius: "18px",
          fontWeight: 500,
          textTransform: "capitalize",
          "&.MuiButton-contained": {
            backgroundColor: COLORS.PRIMARY_MAIN,
            color: "#fff",
            "&:hover": {
              backgroundColor: COLORS.PRIMARY_DARK,
            },
          },
          "&.MuiButton-outlined": {
            borderColor: COLORS.PRIMARY_MAIN,
            color: COLORS.BLACK,
            "&:hover": {
              borderColor: COLORS.PRIMARY_DARK,
              backgroundColor: COLORS.BG_GREY,
            },
          },
          "&.MuiButton-text": {
            color: COLORS.PRIMARY_MAIN,
            "&:hover": {
              color: COLORS.PRIMARY_DARK,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.BG_GREY,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: COLORS.PRIMARY_MAIN,
            },
            "&:hover fieldset": {
              borderColor: COLORS.PRIMARY_DARK,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.PRIMARY_DARK,
            },
            "& .MuiInputBase-input": {
              color: COLORS.BLACK,
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
          fontSize: "14px",
          "&.Mui-focused": {
            color: COLORS.PRIMARY_DARK,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: COLORS.WHITE,
          borderRadius: "15px",
          borderColor: COLORS.BG_GREY,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: COLORS.PRIMARY_DARK,
            },
            "&:hover fieldset": {
              borderColor: COLORS.PRIMARY_DARK,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.PRIMARY_DARK,
              backgroundColor: COLORS.BG_FOCUSED,
            },
            "& .MuiInputBase-input": {
              color: COLORS.BLACK,
            },
          },
        },
        icon: {
          color: COLORS.PRIMARY_MAIN,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.BLACK,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.PRIMARY_DARK,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.PRIMARY_DARK,
          },
          "& .MuiInputBase-input": {
            color: COLORS.BLACK,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          color: COLORS.BLACK,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
        head: {
          fontWeight: 600,
          backgroundColor: COLORS.WHITE,
          color: COLORS.WHITE,
        },
        body: {
          color: COLORS.WHITE,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
        toolbar: {
          color: COLORS.BLACK,
        },
        actions: {
          color: COLORS.BLACK,
        },
        selectIcon: {
          color: COLORS.BLACK,
        },
        select: {
          color: COLORS.BLACK,
        },
        input: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          color: COLORS.PRIMARY_MAIN,
          fontWeight: 600,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          color: COLORS.BLACK,
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          color: COLORS.BLACK,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.PRIMARY_MAIN,
          color: COLORS.WHITE,
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            backgroundColor: COLORS.BG_FOCUSED,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.PRIMARY_MAIN,
          color: COLORS.WHITE,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.BG_GREY,
          color: COLORS.WHITE,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
          "&.Mui-selected": {
            backgroundColor: COLORS.WHITE,
            color: COLORS.BLACK,
          },
          "&:hover": {
            backgroundColor: COLORS.WHITE,
          },
        },
      },
    },
  },
});

export default theme;

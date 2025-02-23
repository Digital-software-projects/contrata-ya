import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

const GoogleButton = () => (
  <Button
    variant="contained"
    startIcon={<Google />}
    fullWidth
    sx={{
      bgcolor: "#6366F1",
      textTransform: "none",
      ":hover": { bgcolor: "#4F46E5" },
    }}
  >
    Continuar con Google
  </Button>
);

export default GoogleButton;

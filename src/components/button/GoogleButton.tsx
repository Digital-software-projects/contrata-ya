import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

interface GoogleButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ disabled, onClick }) => (
  <Button
    variant="contained"
    startIcon={<Google />}
    disabled={disabled}
    onClick={onClick}
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

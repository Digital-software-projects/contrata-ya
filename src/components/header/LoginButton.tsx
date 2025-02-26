import { PageRoutes } from "@/types/PageRoutes";
import { COLORS } from "@/utils/constants";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface LoginButtonProps {
  isSmall?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isSmall = false }) => {
  return (
    <Button
      component={Link}
      href={PageRoutes.Login}
      variant="outlined"
      color="primary"
      sx={{
        fontSize: { xs: 15, md: 16 },
        display: { xs: isSmall ? "block" : "none", md: "block" },
        color: COLORS.PRIMARY_MAIN,
      }}
    >
      Iniciar sesión
    </Button>
  );
};

export default LoginButton;

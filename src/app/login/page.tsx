"use client";
import {
  Button,
  TextField,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Google, Lock } from "@mui/icons-material";
import { useState } from "react";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";

const GoogleButton = () => (
  <Button
    variant="contained"
    startIcon={<Google />}
    fullWidth
    sx={{ bgcolor: "#6366F1", textTransform: "none", ":hover": { bgcolor: "#4F46E5" } }}
  >
    Continuar con Google
  </Button>
);

const InputField = ({
  label,
  type,
  icon,
}: {
  label: string;
  type: string;
  icon?: JSX.Element;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      placeholder="hola"
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

const LoginPage = () => {
  return (
    <Box style={{ width: "100%", overflowX: "hidden" }}>
      <Grid container style={{ width: "100%"}}>
        <Grid
          size={{ lg: 6, md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: {lg: "0px 40px", md: "0 20px", sm: "0 0"},
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={"center"}
            sx={{ width: "100%", }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              textAlign="center"
              gutterBottom
            >
              Bienvenido a <br /> ContrataYa
            </Typography>
            <Typography textAlign="center" mb={3}>
              Conectamos talento con oportunidades
            </Typography>

            <InputField
              label="Correo electrónico"
              type="email"
              icon={<Email />}
            />
            <InputField label="Contraseña" type="password" icon={<Lock />} />

            <Typography
              textAlign="right"
              color="#4F46E5"
              sx={{ cursor: "pointer" }}
            >
              ¿Olvidaste tu contraseña?
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: "#6366F1",
                ":hover": { bgcolor: "#4F46E5" },
              }}
            >
              Iniciar sesión
            </Button>

            <Typography textAlign="center" color="text.secondary" mb={2} mt={2}>
              ó
            </Typography>
            <GoogleButton />

            <Typography mt={2} textAlign="center" color="text.secondary">
              ¿No tienes una cuenta?{" "}
              <Typography
                component="span"
                color="#4F46E5"
                sx={{ cursor: "pointer" }}
              >
                Regístrate aquí
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ lg: 6, md: 12 }}>
          <Box
            component="img"
            src="/auth-image.png"
            alt="Image Preview"
            sx={{
              flex: 1,
              paddingLeft: "30px",
              width: "100%",
              display: { xs: "none", md: "none", lg: "block" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

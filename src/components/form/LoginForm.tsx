"use client";
import { useState } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { Lock, Email } from "@mui/icons-material";
import GoogleButton from "@/components/button/GoogleButton";
import InputField from "@/components/input/InputField";
import { loginWithEmail, loginWithGoogle } from "@/utils/methods/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailLogin = async () => {
    setLoading(true);
    setError("");

    try {
      await loginWithEmail(email, password);
    } catch {
      setError("Hubo un error. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      await loginWithGoogle();
    } catch {
      setError("Hubo un error. Por favor, intenta de nuevo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
        Bienvenid@ a <br /> ContrataYa
      </Typography>
      <Typography textAlign="center" mb={3}>
        Conectamos talento con oportunidades
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <InputField
        label="Correo electrónico"
        type="email"
        icon={<Email />}
        placeholder="Introduce tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Contraseña"
        type="password"
        icon={<Lock />}
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Box width="100%" display="flex" justifyContent="flex-end">
        <Typography
          component={Link}
          textAlign="right"
          mb={2}
          mr={2}
          sx={{ cursor: "pointer" }}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleEmailLogin}
        disabled={loading}
      >
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>

      <Typography textAlign="center" color="text.secondary" mb={2} mt={2}>
        ó
      </Typography>

      <GoogleButton onClick={handleGoogleLogin} disabled={loading} />

      <Typography mt={2} textAlign="center" color="text.secondary">
        ¿No tienes una cuenta?{" "}
        <Typography component={Link} sx={{ cursor: "pointer" }}>
          Regístrate aquí
        </Typography>
      </Typography>
    </Box>
  );
};

export default LoginForm;

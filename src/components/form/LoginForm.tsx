import { Button, Typography, Box, Link } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import GoogleButton from "@/components/button/GoogleButton";
import InputField from "@/components/input/InputField";

const LoginForm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      sx={{ width: "100%" }}
    >
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
        Bienvenid@ a <br /> ContrataYa
      </Typography>
      <Typography textAlign="center" mb={3}>
        Conectamos talento con oportunidades
      </Typography>

      <InputField
        label="Correo electrónico"
        type="email"
        icon={<Email />}
        placeholder="Introduce tu correo"
      />
      <InputField
        label="Contraseña"
        type="password"
        icon={<Lock />}
        placeholder="Introduce tu correo"
      />

      <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
        <Typography component={Link} textAlign="right" mb={2} mr={2}>
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>

      <Button variant="contained" fullWidth>
        Iniciar sesión
      </Button>

      <Typography textAlign="center" color="text.secondary" mb={2} mt={2}>
        ó
      </Typography>
      <GoogleButton />

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

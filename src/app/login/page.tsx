"use client";
import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LoginForm from "@/components/form/LoginForm";
import { useRouter } from "next/navigation";
import { ArrowBackIos } from "@mui/icons-material";

const LoginPage = () => {
  const router = useRouter();

  return (
    <Box style={{ width: "100%", overflowX: "hidden" }}>
      <IconButton onClick={() => router.back()}>
        <ArrowBackIos />
      </IconButton>
      <Grid container style={{ width: "100%" }} mt={1}>
        <Grid
          size={{ lg: 6, md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { lg: "0px 40px", md: "0 20px", sm: "0 0" },
          }}
        >
          <LoginForm />
        </Grid>
        <Grid size={{ lg: 6, md: 0 }}>
          <Box
            component="img"
            src="/auth-image.png"
            alt="Image Preview"
            sx={{
              flex: 1,
              paddingLeft: "30px",
              width: "90%",
              objectFit: "contain",
              display: { xs: "none", md: "none", lg: "block" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

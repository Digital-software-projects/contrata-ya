import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LoginForm from "@/components/form/LoginForm";

const LoginPage = () => {
  return (
    <Box style={{ width: "100%", overflowX: "hidden" }}>
      <Grid container style={{ width: "100%" }}>
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
        <Grid
          size={{ lg: 6, md: 0, }}
        >
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

import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import Subtitle from "../typography/Subtitle";

const VideoContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  maxWidth: "700px",
  aspectRatio: "16 / 9",
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "red",
}));

const Iframe = styled("iframe")({
  width: "100%",
  height: "100%",
});

const Presentation = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        maxWidth: "100vw",
        marginTop: { md: 12, xs: 4 },
      }}
    >
      <Subtitle>Descubre cómo Contrata Ya puede ayudarte</Subtitle>
      <Typography
        variant="body1"
        sx={{ maxWidth: "1000px", margin: "0 auto" }}
        color="textSecondary"
      >
        Aprende paso a paso cómo nuestra plataforma
        <Box
          component="span"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          {" "}
          conecta a contratadores con los mejores trabajadores.
        </Box>{" "}
      </Typography>
      <Box
        mt={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        <VideoContainer>
          <Iframe
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Box>
    </Box>
  );
};

export default Presentation;

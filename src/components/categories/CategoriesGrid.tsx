import { categories } from "@/utils/data";
import { Card, CardMedia, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CategoriesGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {categories.map((category) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category.name}>
          <Card
            sx={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "0.3s ease-in-out",
              },
              "&:hover .category-text": {
                fontSize: "1.8rem",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="160"
                image={category.image}
                alt={category.name}
                sx={{
                  transition: "0.3s ease-in-out",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              />
              <Box
                className="category-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  transition: "0.3s ease-in-out",
                }}
              >
                {category.name}
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoriesGrid;

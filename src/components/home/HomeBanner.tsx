import { useState } from "react";
import { TextField, MenuItem, Button, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";
import CategoriesGrid from "../categories/CategoriesGrid";
import { locations } from "@/types/Locations";
import Title from "../typography/Title";

const WorkersFinder = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("Buscando trabajadores con:", { search, city });
  };

  return (
    <Box sx={{ textAlign: "center", maxWidth: "100vw", overflowX: "hidden" }}>
      <Title>
        Encuentra el talento perfecto para hacer realidad tus proyectos
      </Title>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{  maxWidth: 928, margin: "0 auto" }}
      >
        Conectamos tus ideas con profesionales expertos verificados. Una
        comunidad de talentos especializados listos para llevar tu proyecto al
        siguiente nivel.
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems={"center"}
        sx={{ marginBottom: 8, marginTop: 4 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar por habilidad, proyecto o especialidad..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                style: { padding: "2px", paddingLeft: "16px" },
                startAdornment: (
                  <SearchIcon color="action" sx={{ marginRight: 1 }} />
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 3, md: 2 }}>
          <TextField
            select
            fullWidth
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Ciudad"
          >
            <MenuItem value="" disabled>
              Selecciona tu ciudad
            </MenuItem>
            {locations.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, sm: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      <CategoriesGrid />
    </Box>
  );
};

export default WorkersFinder;

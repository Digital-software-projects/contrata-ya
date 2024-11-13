"use client";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProyects } from "@/services/ProyectService";
import { pageStyles } from "@/styles/pageStyles";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { PageRoutes } from "@/types/PageRoutes";

export default function Home() {
  const [projects, setProjects] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    getProyects().then((data) => setProjects(data));
  }, []);

  return (
    <Box sx={pageStyles.mainContainer}>
      <Typography variant="h6" component="h1" gutterBottom>
        Contrata ya
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Proyectos:
      </Typography>
      <Icon
        color="white"
        icon={"material-symbols:alarm-on"}
        width="48"
        height="48"
      />
      {projects.map((project, index) => (
        <Typography key={index} variant="body1">
          {project}
        </Typography>
      ))}

      <Button variant="contained" onClick={() => router.push(PageRoutes.Admin)}>
        Admin
      </Button>
      <Button variant="contained" onClick={() => router.push(PageRoutes.Profile)}>
        Profile
      </Button>
    </Box>
  );
}

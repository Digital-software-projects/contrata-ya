"use client";
import Box from "@mui/material/Box";
import HomeBanner from "@/components/home/HomeBanner";
import Presentation from "@/components/home/Presentation";

export default function Home() {
  return (
    <Box sx={{ marginTop: { xs: 0, md: 8, lg: 14 } }}>
      <HomeBanner />
      <Presentation />
    </Box>
  );
}

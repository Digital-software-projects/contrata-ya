import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ContrataYa",
    short_name: "ContrataYa",
    description: "Donde tus proyectos cobran vida",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/icon/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import { Container, CssBaseline } from "@mui/material";
import { AuthProvider } from "@/context/AuthContext";

const openSansFont = localFont({
  src: "../assets/fonts/OpenSans.woff2",
  variable: "--font-open-sans",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "ContrataYa - Donde tus proyectos cobran vida",
  description:
    "Encuentra el talento perfecto para hacer realidad tus proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSansFont.variable}}`}>
        <AuthProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {/* HEADER */}
              <Container maxWidth={false}>{children}</Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

"use client";
import { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { COLORS } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { PageRoutes } from "@/types/PageRoutes";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const nonVisibleHeaderPaths = [PageRoutes.Login, PageRoutes.SignUp];

  const menuItems = useMemo(
    () => [
      {
        text: "Buscar trabajadores",
        href: PageRoutes.Search,
        icon: <SearchIcon />,
      },
      { text: "Mis proyectos", href: PageRoutes.Projects, icon: <WorkIcon /> },
      {
        text: "Notificaciones",
        href: PageRoutes.Notifications,
        icon: <NotificationsIcon />,
      },
      ...(user?.roleInApp === "admin"
        ? [{ text: "Admin", href: "/admin", icon: <AdminPanelSettingsIcon /> }]
        : []),
    ],
    [user]
  );

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const renderMenuItems = (onClick?: () => void) =>
    menuItems.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton
          sx={{
            color: pathname === item.href ? COLORS.PRIMARY_DARK : COLORS.BLACK,
            "& .MuiListItemIcon-root": {
              color:
                pathname === item.href ? COLORS.PRIMARY_DARK : COLORS.BLACK,
            },
          }}
          component={Link}
          href={item.href}
          onClick={onClick}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <>
      {nonVisibleHeaderPaths.includes(pathname) ? (
        <></>
      ) : (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
            padding: { xs: "0 5%", md: "0 10%" },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Box
              component="img"
              src="/images/logo/horizontal-logo.png"
              alt="Logo"
              sx={{
                width: { xs: 140, sm: 140, md: 200, lg: 200 },
              }}
            />

            <Box
              sx={{ display: { xs: "none", md: "none", lg: "flex" }, gap: 6 }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      color:
                        pathname === item.href
                          ? COLORS.PRIMARY_DARK
                          : COLORS.BLACK,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      transition: "color 0.3s ease-in-out",
                      "&:hover": {
                        color: COLORS.PRIMARY_DARK,
                      },
                    }}
                  >
                    {item.icon}
                    <Typography>{item.text}</Typography>
                  </Box>
                </Link>
              ))}
            </Box>

            {user ? <ProfileButton onClick={toggleDrawer} /> : <LoginButton />}

            <IconButton
              sx={{ display: { md: "block", lg: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <List sx={{ flexGrow: 1 }}>
                  {renderMenuItems(toggleDrawer)}
                </List>

                <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                  {user ? (
                    <ProfileButton onClick={toggleDrawer} />
                  ) : (
                    <LoginButton isSmall />
                  )}
                </Box>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;

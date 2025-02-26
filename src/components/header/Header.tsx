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
  Avatar,
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
        <ListItemButton component={Link} href={item.href} onClick={onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ));

  return (
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
        sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
      >
        <Typography
          component={Link}
          href="/"
          variant="h6"
          sx={{ color: "#202020", fontWeight: 600, textDecoration: "none" }}
        >
          Contrata Ya
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 6 }}>
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              passHref
              style={{
                color:
                  pathname === item.href
                    ? COLORS.PRIMARY_MAIN
                    : COLORS.PRIMARY_LIGHT,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: 10,
              }}
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
        </Box>

        {user ? <ProfileButton onClick={toggleDrawer} /> : <LoginButton />}

        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
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
            <List sx={{ flexGrow: 1 }}>{renderMenuItems(toggleDrawer)}</List>

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
  );
};

export default Header;

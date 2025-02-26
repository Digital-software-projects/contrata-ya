import { useAuth } from "@/context/AuthContext";
import { cutUntilFirstSpace } from "@/utils/methods/stringMethods";
import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

interface ProfileButtonProps {
  onClick: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ onClick }) => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <ListItem disablePadding>
          <ListItemButton onClick={onClick}>
            <ListItemIcon>
              <Avatar src={user.profilePhoto?.url || "none"} />
            </ListItemIcon>
            <ListItemText
              primary={cutUntilFirstSpace(user.name)}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 100,
              }}
            />
          </ListItemButton>
        </ListItem>
      )}
    </>
  );
};

export default ProfileButton;

"use client";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavLinks from "../NavLinks";

export interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <NavLinks className="flex-col p-4" />
      <Divider className="!my-2" />
      <div className="flex w-full justify-center [&>div]:bg-orange-300 [&>div]:p-4 [&>div]:rounded">
        <ConnectButton />
      </div>
    </Box>
  );

  return (
    <div className={className}>
      <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Menu, MenuItem, Button, Typography } from "@mui/material";

const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenMenu}>
        Open Menu
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Typography>Option 1</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Typography>Option 2</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Typography>Option 3</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default MenuComponent;

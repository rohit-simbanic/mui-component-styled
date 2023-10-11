"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledAlert = styled(Card)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: theme.spacing(3),
  width: "300px",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[5],
  zIndex: 1000,
}));

const CloseButton = styled(Button)({
  position: "absolute",
  top: "5px",
  right: "5px",
});

const AlertComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <StyledAlert>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
      <Typography variant="h6">Alert Title</Typography>
      <Typography>This is the content of the alert.</Typography>
      <Button variant="contained" color="primary">
        OK
      </Button>
    </StyledAlert>
  ) : null;
};

export default AlertComponent;

"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledCard = styled(Card)(({ theme }) => ({
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

const PopupCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <StyledCard>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
      <Typography variant="h6">Popup Card Title</Typography>
      <Typography>This is the content of the popup card.</Typography>
      <Button variant="contained" color="primary">
        OK
      </Button>
    </StyledCard>
  ) : null;
};

export default PopupCard;

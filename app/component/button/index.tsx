"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

// common button component
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  padding: theme.spacing(0.8, 2),
  borderRadius: theme.spacing(0.5),
  border: "none",
  cursor: "pointer",
  transition: theme.transitions.easing.easeInOut,
  margin: theme.spacing(0, 4),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0), // Apply margin for mobile view
  },
}));

const ButtonComponent = () => {
  return (
    <StyledButton>
      <Typography>Submit</Typography>
    </StyledButton>
  );
};

export default ButtonComponent;

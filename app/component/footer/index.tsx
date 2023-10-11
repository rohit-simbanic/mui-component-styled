"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography, Link } from "@mui/material";

const StyledFooter = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.spacing(0),
}));

const FooterComponent = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="white">
        &copy; {new Date().getFullYear()} Your Company Name
      </Typography>
      <Link
        color="#ffffff"
        href="/privacy-policy"
        style={{ marginLeft: "16px" }}
      >
        Privacy Policy
      </Link>
    </StyledFooter>
  );
};

export default FooterComponent;

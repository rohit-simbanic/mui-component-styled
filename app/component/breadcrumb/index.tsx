"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));

const BreadcrumbComponent = () => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href="/products">
        Products
      </Link>
      <Typography color="textPrimary">Details</Typography>
    </StyledBreadcrumbs>
  );
};

export default BreadcrumbComponent;

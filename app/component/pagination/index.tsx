"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Button,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const StyledPagination = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "white",
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  zIndex: 1000,
}));

const PaginationComponent: React.FC = () => {
  const options = [5, 10, 15];
  const [pageSize, setPageSize] = React.useState(options[0]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPageSize(event.target.value as number);
  };

  return (
    <StyledPagination>
      <Typography variant="body1">Items per page:</Typography>
      <Select
        value={pageSize}
        onChange={(event: SelectChangeEvent<number>) => {
          setPageSize(event.target.value as number);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="body1">Total Items: 30</Typography>
      <Button variant="contained" color="primary">
        Prev
      </Button>
      <Button variant="contained" color="primary">
        Next
      </Button>
    </StyledPagination>
  );
};

export default PaginationComponent;

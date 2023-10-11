"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Rating, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledCard = styled("div")(({ theme }) => ({
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
  display: "flex",
  flexDirection: "column",
}));

const CloseButton = styled(Button)({
  alignSelf: "flex-end",
});

const RatingComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [rating, setRating] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRatingChange = (newValue: number | null) => {
    setRating(newValue || 0);
  };

  return isOpen ? (
    <StyledCard>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
      <Typography variant="h6">Rate This Product</Typography>
      <Rating
        name="product-rating"
        value={rating}
        onChange={(event, newValue) => handleRatingChange(newValue)}
      />
      <Button variant="contained" color="primary">
        Submit Rating
      </Button>
    </StyledCard>
  ) : null;
};

export default RatingComponent;

import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";

const Business = (props) => {
  const id = useParams().id;
  const business = props.businesses[id];

  return (
    <Container maxWidth="sm" className="business-container">
      <Paper className="business-paper">
        <h1>{business.name}</h1>
        <h3>{business.description}</h3>
        <div>This is where the map will go!</div>
      </Paper>
    </Container>
  );
};

export default Business;

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Paper } from "@mui/material";
import Map from './Map';
// import Marker from "./Marker";


const Business = (props) => {
  const id = useParams().id;
  const business = useSelector(state => state.businesses)[id];
  console.log(business)

  return (
    <Container maxWidth="sm" className="business-container">
      <Paper className="business-paper">
        <h1>{business.name}</h1>
        <h3>{business.description}</h3>
        <Map business={business}></Map>
      </Paper>
    </Container>
  );
};

export default Business;

import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import Map from './Map';
// import Marker from "./Marker";


const Business = (props) => {
  const id = useParams().id;
  const business = props.businesses[id];
  console.log(business)

  return (
    <Container maxWidth="sm" className="business-container">
      <Paper className="business-paper">
        <h1>{business.name}</h1>
        <h3>{business.description}</h3>
        <Map business={business}></Map>
        <h3>If I could figure out the Google Maps API, you would see a marker on {business.position.lat}, {business.position.lng}</h3>
      </Paper>
    </Container>
  );
};

export default Business;

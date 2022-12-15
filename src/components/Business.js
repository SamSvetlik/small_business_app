import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import { Wrapper, Status, Marker } from "@googlemaps/react-wrapper";
import Map from './Map';
// import Marker from "./Marker";


const Business = (props) => {
  const id = useParams().id;
  const business = props.businesses[id];
  const [map, setMap] = React.useState();

  return (
    <Container maxWidth="sm" className="business-container">
      <Paper className="business-paper">
        <h1>{business.name}</h1>
        <h3>{business.description}</h3>
        <Wrapper apiKey={"AIzaSyArhMi7ylqz6vrLMcks06vPUYqGYkQjfNE"}>
          <Map map={map} setMap={setMap}>
            {/* <Marker position={{lat: business.position.lat, lng: business.position.lng}} /> */}
          </Map>
        </Wrapper>
        <h3>If I could figure out the Google Maps API, you would see a pin on {business.position.lat}, {business.position.lng}</h3>
      </Paper>
    </Container>
  );
};

export default Business;

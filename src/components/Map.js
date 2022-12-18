import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const Map = (props) => {
    
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyArhMi7ylqz6vrLMcks06vPUYqGYkQjfNE"
  });

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <GoogleMap zoom={14} center={props.business.position} mapContainerClassName="map">
      <MarkerF position={props.business.position} />
    </GoogleMap>
  )

}

export default Map
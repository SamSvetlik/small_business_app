import React from "react";


const Map = (props) => {
    
    const ref = React.useRef(null);
// const [map, setMap] = React.useState();

React.useEffect(() => {
  if (ref.current && !props.map) {
    props.setMap(new window.google.maps.Map(ref.current, {zoom: 12, center: {
        lat: 33.576698,
        lng: -101.855072
    }}));
  }
}, [ref, props.map]);
    
    return <div style={{height: "500px", width: "500px"}} ref={ref} />

}

export default Map
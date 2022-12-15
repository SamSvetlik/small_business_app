/*global google*/

import React from "react";


const Marker = (props) => {
    console.log("Marker")
    const [marker, setMarker] = React.useState();
  
    React.useEffect(() => {
        console.log(props)
      if (!marker) {
        setMarker(new google.maps.Marker({
            map: props.map,
            position: props.position
          }
      ));
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, []);
    // React.useEffect(() => {
    //     console.log(marker)
    //   if (marker) {
    //     marker.setOptions(props);
    //   }
    // }, [marker, props]);
    return null;
  };

  export default Marker
  
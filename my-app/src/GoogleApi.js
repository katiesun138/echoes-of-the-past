import React, { useEffect } from "react";

function GoogleApi(){ 

    function componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  useEffect(() => componentDidMount());

    return(
        <div>
            <h1>Welcome to the GoogleApi page</h1>
            <div>
                <h3>Tracking your location...</h3>
            </div>
        </div>
    )
}

export default GoogleApi;
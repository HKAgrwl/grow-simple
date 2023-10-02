import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

export function GetDistance (locations){
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: locations,
      router: new L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
      }),
    });

    routingControl.on("routesfound", (e) => {
      const dist = e.routes[0].summary.totalDistance;
      const km = Math.round((dist / 1000) * 100) / 100;
      setDistance(km);
    });

    // return a cleanup function to remove the routing control
    return () => {
      routingControl.remove();
    };
  }, [locations]); // re-run the effect when the locations array changes

  return distance;
};

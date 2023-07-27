import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

export default function MapComponent({ locations }) {
  const mapRef = useRef(null);
  const [index, setIndex] = useState(0); // create a state to keep track of the current index
  const [routingControl, setRoutingControl] = useState(null); // create a state to store the routing control

  useEffect(() => {
    // create a map instance
    const map = L.map(mapRef.current).setView([0, 0], 13);

    // add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // create a routing control
    const rc = L.Routing.control({
      waypoints: locations.slice(index, index + 2), // use the locations array as waypoints, starting from the current index
      routeWhileDragging: true, // enable dragging the route
      showAlternatives: true, // show alternative routes
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }], // customize the route line style
      },
      altLineOptions: {
        styles: [{ color: "green", weight: 2 }], // customize the alternative route line style
      },
    }).addTo(map);

    // fit the map to the route bounds
    // map.fitBounds(rc.getBounds());

    // set the routing control state
    setRoutingControl(rc);

    // return a cleanup function to remove the map
    return () => {
      map.remove();
    };
  }, []); // run the effect only once

  const handleClick = () => {
    // define a handler function for the button click
    if (index < locations.length - 2) {
      // if there are more locations to show
      setIndex((prev) => prev + 1); // increment the index by one
      routingControl.setWaypoints(locations.slice(index + 1, index + 3)); // update the waypoints of the routing control with the next two locations
    }
  };

  const handlePrev = () => {
    // define a handler function for the previous button click
    if (index > 0) {
      // if there are previous locations to show
      setIndex((prev) => prev - 1); // decrement the index by one
      routingControl.setWaypoints(locations.slice(index - 1, index + 1)); // update the waypoints of the routing control with the previous two locations
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div ref={mapRef} style={{ height: "100vh" }}></div>
      <div className='next-display-container'>
        <figure class="text-center">
          <blockquote class="blockquote">
            <p style={{ fontSize: '40px', fontFamily: 'serif' }}>Deliveries</p>
          </blockquote>
        </figure>
        <ul class="list-group">
          {locations.map(data => (
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
              <label class="form-check-label" for="firstCheckbox">{data.DeliveryLocation}</label>
            </li>
          ))}
        </ul>
        <button class="btn btn-warning" style={{ position: 'relative', bottom: '-300px', left: '60px' }}  onClick={handleClick}>Next</button>
        <button class="btn btn-warning" style={{ position: 'relative', bottom: '-300px', left: '120px' }} onClick={handlePrev}>Previous</button>
      </div>
    </div>
  );
};

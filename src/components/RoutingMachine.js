import React from 'react'
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useEffect } from "react";

function RoutingMachine({start,end}) {  

    useEffect(()=>{
        console.log('Change in Waypoint')
    },[start,end])

    const instance = L.Routing.control({
        waypoints: [
            L.latLng(start),
            L.latLng(end)
        ],
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }]
        },

        createMarker: function (i, waypoint, n) {
            const marker = L.marker(waypoint.latLng, {
              draggable: true,
              bounceOnAdd: false,
              bounceOnAddOptions: {
                duration: 1000,
                height: 800,
              },
              icon: L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/1916/1916790.png',
                iconSize: [38, 30],
                iconAnchor: [2, 2],
                popupAnchor: [-3, -76],
                shadowSize: [68, 95],
                shadowAnchor: [22, 94]
              })
            });
            return marker;
        },

        show: false,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
      });
    
      return instance;
}

const RoutingMachineSetup = createControlComponent(RoutingMachine);

export default RoutingMachineSetup;

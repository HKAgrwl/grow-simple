import React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import RoutingMachine from './RoutingMachine'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'



const MyMapComponent=()=> {

  const [start, setStart] = useState([39.9072, 22.0369])
  const [end, setEnd] = useState([39.7749, 22.4194])

  const markers = [
    {
      geocode:[48.86,2.3522],
      popUp :"This is location 1"
    },
    {
      geocode:[48.85,2.3522],
      popUp :"This is location 2"
    }
  ]

  const customIcon = new Icon({
    iconUrl:"	https://cdn-icons-png.flaticon.com/512/1916/1916790.png",
    iconSize:[38,38]
  })

  return (
  <MapContainer center={[48.86,2.3522]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {markers.map((marker) => (
    <Marker position={marker.geocode} icon={customIcon}>
    <Popup>{marker.popUp}</Popup>
    </Marker>
  ))}
  <RoutingMachine start={start} end={end}/>
</MapContainer>
  
  )
}

export {MyMapComponent};
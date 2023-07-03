import React, {useEffect } from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingMachine from './RoutingMachine'
import 'leaflet/dist/leaflet.css'
export default function MyMapComponent({start,end}) {

  return (
    <>
      <MapContainer center={[48.86, 2.3522]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine start={start} end={end} />
      </MapContainer>
    </>

  )
}
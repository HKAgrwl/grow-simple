import React from 'react'
import { MyMapComponent } from '../components/MapComponent'
import NextLocDisplay from "../components/NextLocDisplay";

export default function Map() {
  return (
    <div style={{display:'flex'}}>
        <MyMapComponent/>
        <NextLocDisplay/>
    </div>
  )
}

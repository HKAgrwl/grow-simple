import React,{useState,useEffect} from 'react'
import MapComponent from '../components/MapComponent'

export default function Map() {

  const locationList = JSON.parse(localStorage.getItem("locationList"));

  return (
    <div style={{ display: 'flex' }}> 
      <MapComponent locations={locationList} />
    </div>
  )
}

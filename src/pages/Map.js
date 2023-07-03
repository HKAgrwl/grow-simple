import React,{useState,useEffect} from 'react'
import MyMapComponent from '../components/MapComponent'

export default function Map() {

  const locationList = JSON.parse(localStorage.getItem("locationList"));
  let currentLocation = 0;
  let nextLocation = 1;

  const [start, setStart] = useState([locationList[3].lat, locationList[3].lon])
  const [end, setEnd] = useState([locationList[2].lat, locationList[2].lon])

  // useEffect(() => {
  //   console.log('hello')
  // }, [start,end]);

  const getNextRoute = () => {
    try {
      console.log(locationList);
      currentLocation += 1;
      nextLocation += 1;
      setStart(locationList[currentLocation].lat, locationList[currentLocation].lon)
      setEnd(locationList[nextLocation].lat, locationList[nextLocation].lon)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <MyMapComponent start={start} end={end}/>
      <div className='next-display-container'>
        <figure class="text-center">
          <blockquote class="blockquote">
            <p style={{ fontSize: '40px', fontFamily: 'serif' }}>Deliveries</p>
          </blockquote>
        </figure>
        <ul class="list-group">
          {locationList.map(data => (
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
              <label class="form-check-label" for="firstCheckbox">{data.DeliveryLocation}</label>
            </li>
          ))}
        </ul>
        <button type="button" class="btn btn-warning" style={{ position: 'relative', bottom: '-300px', left: '90px' }}>Next Location</button>
      </div>
    </div>
  )
}

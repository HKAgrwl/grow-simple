import React, { useState,useContext } from 'react'
import axios from 'axios';
import AppContext from '../context/appContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const { locationList, setLocationList } = useContext(AppContext);

    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const getCoordinates = async (requestUrl) => {
        try {
            const response = await axios.post(requestUrl)
            const latitude = response.data[0].lat
            const longitude = response.data[0].lon
            setLocationList([...locationList, { DeliveryLocation: location, lat: latitude, lon: longitude, id: Math.random() * 1000 }])
        } catch (error) {
            console.log(error.response)
        }
    }

    const formUrl = (locationArray) => {
        let url = 'https://geocode.maps.co/search?q='
        for (let i = 0; i < locationArray.length; i++) {
            if (i === locationArray.length - 1) {
                url = url + `${locationArray[i]}`
                break
            }
            url = url + `${locationArray[i]}+`
        }
        return url;
    }

    const handleAddLocation = (e) => {
        e.preventDefault()
        const locationArray = location.split(" ")
        const formedUrl = formUrl(locationArray);
        getCoordinates(formedUrl);
        setLocation('')
    }

    const handleSubmit = (e) => {
        localStorage.setItem("locationList", JSON.stringify(locationList))
        console.log('Submit Hit');
        navigate('/map');
    }

    return (
        <div style={{ width: '55vw', display: 'flex', padding: '8px 8px', margin: 'auto', marginTop: '10vh' }}>
            <div className="form-floating mb-3" style={{ width: '70%' }}>
                <input className="form-control" id="floatingInput" value={location} onChange={handleChange} />
            </div>
            <button type="button" className="btn btn-outline-success" style={{ width: '20%', height: '8vh', margin: '0px 10px 10px 15px' }} onClick={handleAddLocation}>Add Location</button>
            <button type="button" className="btn btn-outline-danger" style={{ width: '20%', height: '8vh', margin: '0px 20px 20px 5px' }} onClick={handleSubmit} >Submit</button>
        </div>
    )
}

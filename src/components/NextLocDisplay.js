import React, { useContext } from 'react'
import AppContext from '../context/appContext';

export default function NextLocDisplay() {

    const locationList = JSON.parse(localStorage.getItem('locationList'));
    const {nextRoute} = useContext(AppContext);

    return (
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
            <button type="button" class="btn btn-warning" style={{ position: 'relative', bottom: '-300px', left: '90px' }} onClick={nextRoute}>Next Location</button>
        </div>
    )
}

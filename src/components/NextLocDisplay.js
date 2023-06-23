import React from 'react'
import { locationData } from './Data'

export default function NextLocDisplay() {
    return (
        <div className='next-display-container'>
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p style={{fontSize:'40px',fontFamily:'serif'}}>Deliveries</p>
                </blockquote>
            </figure>
            <ul class="list-group">
                {locationData.map(data=>(
                    <li class="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                    <label class="form-check-label" for="firstCheckbox">{data.location}</label>
                </li>
                ))}
            </ul>
            <button type="button" class="btn btn-warning" style={{ position: 'relative', bottom: '-300px', left: '90px' }}>Next Location</button>
        </div>
    )
}

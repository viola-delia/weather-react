import React from "react";
import axios from 'axios';


export default function Forecast() {
    return (
        <div className='content'>
            <form>
                <input type='text'></input>
                <input type='submit' value='Search'></input>
                <br />
                <h1>San Francisco</h1>
                <h2>☁️ 11° C</h2>
                <p>Friday 16:17, overcast clouds</p>
                <p>Humidity: 90%, Wind: 7.15km/h</p>
                <p>
                    <ul>
                        <li>Sat</li>
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                    </ul>
                </p>
            </form>
        </div>
    );
  
}
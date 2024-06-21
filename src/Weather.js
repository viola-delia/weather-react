import React from "react";
import axios from 'axios';


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in New York is ${response.data.main.temp}`)
    }
    let apiKey = "";
    let apiUrl = "";
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from weather</h2>
    )
}
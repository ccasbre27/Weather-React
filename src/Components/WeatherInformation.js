import React from 'react';

function WeatherInformation({ weatherData }) {

    // extraemos los valores
    const { name, main } = weatherData;

    if (!name) {
        return null;
    }

    // restar grados kelvin
    const kelvin = 273.15;


    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather of {name}</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                <p>Minimum Temperature: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
                <p>Max Temperatura: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    );
}

export default WeatherInformation;
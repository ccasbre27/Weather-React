import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Error from './Components/Error';
import WeatherInformation from './Components/WeatherInformation';

function App() {

  // state principal
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {

    //
    if(city === '') {
      return;
    }

    getWeatherAPI();

  }, [city, country]);

  const dataSearch = (data) => {

    // validar que ambos campos tengan data
    if(data.city === '' || data.country === '') {
      // error
      setError(true);
      return;
    }
   
    // ambos existe, agregarlos al state
    setCity(data.city);
    setCountry(data.country);
    setError(false);

  }

  const getWeatherAPI = async () => {
    const appId = 'YOUR_API_KEY';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    // consultar la url
    const response = await fetch(url);
    const result = await response.json();

    setResult(result);
  }

  // cargar un componente condicionalmente
  let component;
  if(error) {
    // si hay error se muestra
    component = <Error message='Both fields are required' />
  } else if (result.cod === '404') {
    component = <Error message='That city does not exist in our records' />
  } else {
    // en caso que no haya se muestra el clima
    component = 
      <WeatherInformation weatherData={result} />;
  }

  return (
    <div className="App">
      <Header
        title="Weather App" />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Form 
                  dataSearch={dataSearch} />
              </div>
              <div className="col s12 m6">
                {component}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;

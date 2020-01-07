import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Header
        title="Weather App" />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Form />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;

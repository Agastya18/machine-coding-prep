import { useState } from 'react'

import './App.css'
const API="4b2f9588bda22b82b48dd98fecabc2c6"
function App() {
  const [val,setVal]= useState()
  const [dt,setData]= useState()
  const getWeather = async () => {
    const resp= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${API}`);
    const data = await resp.json();

    setData(data);
   
   
   
  
  }
  console.log(dt);
 
  return (
    <div>
      <h1>Weather App</h1>
       <div>
       <input value={val} type="text" placeholder="Enter Latitude" onChange={
          (e) => setVal(e.target.value)
       } />
       </div>
      <button onClick={getWeather}>Get Weather</button>
      <div>
        <h2>Weather Details</h2>
        <p>Temperature:{dt?.main.temp} </p>
        {/* <p>Weather:{dt?.wind.speed} </p> */}
        <p>Humidity:{dt?.main.humidity} </p>
        <p>Wind Speed:{dt?.wind.speed} </p>
      </div>
    </div>
  )
}

export default App

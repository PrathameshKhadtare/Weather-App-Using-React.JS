import React, { useEffect, useState } from 'react';
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const [weatherData, setWeatherData]= useState(false);

  const search = async(city)=>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units&appid=${import.meta.env.VITE_APP_ID}`

      const response= await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: data.main.temp
      })
    } catch (error) {
      
    }
  
  }
  useEffect(() => {
    search("London");
  },[])
  return (
    <div className='weather'>
    <div className='search-bar'>
        <input type='text' placeholder='Search'/>
         <img src={search_icon} alt='search icon'/>
    </div>
    <img src={clear_icon} alt='clear icon' className='weather-icon'/>
    <p className='temperature'>16°C</p>
    <p className='location'>London</p>
    <div className='weather-data'>
      <div className='col'>
        <img src={humidity_icon} alt='humidity icon'/>
        <div>
        <p>91 %</p>
      <span>Humidity</span>
      </div>
    </div>
      <div className='col'>
        <img src={wind_icon} alt='wind icon'/>
        <div>
        <p>3.6km/hr</p>
        <span>Wind Speed</span>
        </div>
      </div>
      
    </div>
        
    </div>
  )
}

export default Weather
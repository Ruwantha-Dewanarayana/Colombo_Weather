import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showExtended, setShowExtended] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/forecast?q=Colombo&units=metric&appid=8396fa68e644d642aa9ad57aa0037826'
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggleExtended = () => {
    setShowExtended(!showExtended);
  };

  if (!weatherData) {
    return <div>Loading weather data</div>;
  }

  const weatherList = showExtended
    ? weatherData.list
    : weatherData.list.slice(0, 18); 

  return (
    <div className="weather-app">
      <h2>Weather App For Colombo</h2>
      <div className="weather-list">
        {weatherList.map((item, index) => (
          <div className="weather-item" key={index}>
            <p>Date: {item.dt_txt}</p>
            <p>Temperature: {item.main.temp}°C</p>
            <p>Weather: {item.weather[0].description}</p>
            <p>Wind Speed: {item.wind.speed}Km/h</p>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleToggleExtended}>
        {showExtended ? 'Show First 3 Days Weather' : 'View More'}
      </button>
    </div>
  );
};

export default WeatherApp;

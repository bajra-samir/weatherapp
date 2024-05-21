import React from "react";

import WeatherPng from "../assests/weather.png";

const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="current-weather">
      <h4 className="current-weather-label text-4xl">Current Weather</h4>
      <p className="current-time font-bold">
        {weatherData?.location?.localtime}
      </p>
      <div className="icon-temp">
        <img
          src={weatherData?.current?.condition.icon || WeatherPng}
          alt="weather-icon"
        />
        <div className="temp-detail">
          <h1 className="weather-temp">
            {weatherData?.current?.temp_c || 0}
            <sup>C</sup>
          </h1>
          <p className="weather-status">
            {weatherData?.current?.condition.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

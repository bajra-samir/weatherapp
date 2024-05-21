import React, { useState } from "react";

import Graph from "./graph";
import SearchBox from "./search-box";
import DaysForecast from "./days-forecast";
import CurrentWeather from "./current-weather";
import WeatherHighlight from "./weather-highlight";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");

  return (
    <div className="wrapper">
      <div className="left-wrapper min-w-[220px]">
        <SearchBox setWeatherData={setWeatherData} />
        <CurrentWeather weatherData={weatherData} />
        <DaysForecast />
      </div>
      <div className="right-wrapper">
        <WeatherHighlight weatherData={weatherData} />
        <Graph />
      </div>
    </div>
  );
};

export default Weather;

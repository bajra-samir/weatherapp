import axios from "axios";
import { CiSearch } from "react-icons/ci";
import React, { useEffect, useState } from "react";

import { Input } from "../common/inputs";

const CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  baseUrl: "https://api.weatherapi.com/v1/current.json",
};

const SearchBox = ({ setWeatherData }) => {
  const [location, setLocation] = useState("");
  const [placeData, setPlaceData] = useState([]);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const places = await axios.get(
        `http://geodb-free-service.wirefreethought.com/v1/geo/places?namePrefix=${location}&hateoasMode=false`
      );

      setPlaceData(places.data.data);
    };

    if (location) fetchLocation();
  }, [location]);

  const fetchWeather = async (location) => {
    const places = await axios.get(
      `${CONFIG.baseUrl}?key=${CONFIG.apiKey}&q=${location}&aqi=yes`
    );

    setWeatherData(places.data);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !!location) {
      fetchWeather(location);
    }
  };

  const handleLocationdAndWeather = (value) => {
    setLocation(value);
    fetchWeather(value);
  };

  return (
    <div className="search-wrapper flex items-center pl-2 bg-[#315D9A] rounded-2 relative">
      <CiSearch className="w-4 h-4" />
      <Input
        name="location"
        value={location}
        onChange={handleLocation}
        placeholder="Search for location"
        textStyle="bg-transparent text-[14px] border-none"
        onKeyDown={handleKeyDown}
      />
      <ul
        className={`absolute top-[40px] min-h-[60px] max-h-[150px] w-full bg-[#5883B8] rounded-2 p-2 ml-[-8px] overflow-auto z-10 ${
          placeData && location ? "block" : "hidden"
        } `}
      >
        {placeData?.map((place) => (
          <li
            key={place.id}
            className="hover:bg-[#315D9A] py-0.5 px-2 cursor-pointer rounded-2"
            onClick={() => handleLocationdAndWeather(place.name)}
          >
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;

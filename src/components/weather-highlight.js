import React from "react";

const WeatherHighlight = ({ weatherData }) => {
  return (
    <>
      <h5 className="font-bold pt-1.5 ">Today's Highlights</h5>
      <div className="flex flex-1 gap-1 flex-wrap mt-[30px]">
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>UV Index</p>
          <p className="font-bold text-3xl mt-1">{weatherData?.current?.uv}</p>
        </div>
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>Wind Status</p>
          <p className="font-bold text-3xl mt-1">
            {weatherData?.current?.wind_kph}
          </p>
        </div>
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>Cloud</p>
          <p className="font-bold text-3xl mt-1">
            {weatherData?.current?.cloud}
          </p>
        </div>
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>Humidity</p>
          <p className="font-bold text-3xl mt-1">
            {weatherData?.current?.humidity}
          </p>
        </div>
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>Visibility</p>
          <p className="font-bold text-3xl mt-1">
            {weatherData?.current?.vis_km}
          </p>
        </div>
        <div className="p-2.5 min-w-[130px] h-[82px] bg-[#315D9A] rounded-[8px]">
          <p>Pressure</p>
          <p className="font-bold text-3xl mt-1">
            {weatherData?.current?.pressure_in}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherHighlight;

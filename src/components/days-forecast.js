import React from "react";

const DaysForecast = () => {
  return (
    <div className="py-3.5 px-[16px] bg-[#5883B8] rounded-[8px] mt-3">
      <p className="font-semibold text-[14px]">7-Days Forecast</p>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex">
          <div className="w-[16px] h-[16px] mr-2">
            <img src="" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="grid grid-cols-[75px_1fr]">
            <p className="text-[14px]">24/32</p>
            <p className="text-[14px]">39 May, Thu</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[16px] h-[16px] mr-2">
            <img src="" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="grid grid-cols-[75px_1fr]">
            <p className="text-[14px]">24/32</p>
            <p className="text-[14px]">2 May, Thu</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[16px] h-[16px] mr-2">
            <img src="" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="grid grid-cols-[75px_1fr]">
            <p className="text-[14px]">24/32</p>
            <p className="text-[14px]">9 May, Thu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysForecast;

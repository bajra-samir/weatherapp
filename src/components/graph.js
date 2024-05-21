import React from "react";

const Graph = () => {
  return (
    <div className="mt-[16px] rounded-[8px] border-1 py-3.5 px-[16px]    ">
      <div>
        <div className="flex justify-between items-center ">
          <h3 className="font-semibold text-[14px]">Summary</h3>
          <div>
            <button className="text-[12px] border-1 rounded-[4px] px-2 py-0.5 mr-1 outline-none hover:bg-[#315D9A]">
              Summary
            </button>
            <button className="text-[12px] border-1 rounded-[4px] px-2 py-0.5 hover:bg-[#315D9A]">
              Hourly
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p>Graph</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;

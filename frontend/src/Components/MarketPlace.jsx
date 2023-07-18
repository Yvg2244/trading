import React from "react";
import MarketPlaceItem from "./MarketPlaceItem";

const MarketPlace = () => {
  return (
    <div className="flex flex-col gap-4 w-ful h-full pt-[5rem] px-5">
      {/* header - nifty time  */}
      <div className="alert shadow-lg">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Market Place</h2>
        </div>
      </div>

      {/* main area displays cards */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Strategy</th>
              <th>Recommended Capital Deployment</th>
            </tr>
          </thead>
          <tbody>
            {/* use map here  */}
           <MarketPlaceItem/>
           <MarketPlaceItem/>
           <MarketPlaceItem/>
           <MarketPlaceItem/>
           <MarketPlaceItem/>
     
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketPlace;

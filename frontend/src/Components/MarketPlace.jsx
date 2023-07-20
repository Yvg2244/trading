import React from "react";
import MarketPlaceItem from "./MarketPlaceItem";

const MarketPlace = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#101013] text-white w-ful h-full pt-[7rem] px-[5rem]">
      {/* header - nifty time  */}

      <h2 className="font-bold text-2xl">Net Position : AudiTT(demo)</h2>

      {/* main area displays cards */}
      <div className="overflow-x-auto">
        <table className="table  text-white">
          {/* head */}
          <thead className="bg[#0A0A0C]">
            <tr className=" text-[#BABABA] text-lg">
              <th className="font-normal">Symbol</th>
              <th className="font-normal">LTP</th>
              <th className="font-normal">MTM</th>
              <th className="font-normal">Qty</th>
              <th className="font-normal">Statergy</th>
              <th className="font-normal">Buy</th>
              <th className="font-normal">Sell</th>
            </tr>
          </thead>
          <tbody className="">
            {/* use map here  */}
            <MarketPlaceItem />
            <MarketPlaceItem />
            <MarketPlaceItem />
            <MarketPlaceItem />
            <MarketPlaceItem />
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default MarketPlace;

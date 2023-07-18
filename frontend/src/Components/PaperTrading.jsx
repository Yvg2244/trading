import React, { useState } from "react";
import PaperTradingCard from "./PaperTradingCard";
const PaperTrading = () => {
  const [time, setTime] = useState("06:20:56");
  const [nifty, setNifty] = useState("19,711");
  const [bankNifty, setBankNifty] = useState("45,449");

  return (
    <div className="flex flex-col gap-4 w-ful h-full pt-[5rem] px-5">
      {/* header - nifty time  */}
      <div className="alert shadow-lg">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Paper Trading</h2>
          <div className="text-xs">
            Time: <b>{time}</b>, Nifty: <b>{nifty}</b>, BankNifty:{" "}
            <b>{bankNifty}</b>
          </div>
        </div>
      </div>
      {/* main area displays cards */}
      <div className="grid gap-x-2 gap-y-4 grid-cols-12">
        {/* use map  */}
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
      </div>
    </div>
  );
};

export default PaperTrading;

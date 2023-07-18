import React from "react";

const PaperTradingCard = () => {
  return (
    <div className="card col-span-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <span>Loss $45</span>
        <button className="btn">Generate</button>

      </div>
    </div>
  );
};

export default PaperTradingCard;

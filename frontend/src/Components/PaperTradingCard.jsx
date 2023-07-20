import React, { useEffect, useState } from "react";

const PaperTradingCard = () => {
  const [show, setShow] = useState(false);
  const showButton = () => {
    console.log("first");
    setShow(!show);
  };
  useEffect(() => {}, [show]);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="card  bg-[#E18E91] rounded-md   w-[260px] text-black text-lg "
    >
      <div className="card-body  justify-between flex flex-row p-0">
        <div className="flex items-center w-full  my-[16px] gap-4 flex-col">
          <div className="flex font-bold gap-2 w-full justify-evenly">
            <span>AudiTT</span>
            <span>$40</span>
          </div>
          <button className=" rounded-none w-[150px] text-center text-[12px] font-bold bg-white  text-black">
            Generate
          </button>
        </div>
        <div
          className={`bg-white rounded-r-md font-black ${
            show ? "flex" : "hidden"
          } h-full  justify-center items-center px-2`}
        >
          <button>&#62;</button>
        </div>
      </div>
      {/* <button className="btn">Generate</button> */}
    </div>
  );
};

export default PaperTradingCard;

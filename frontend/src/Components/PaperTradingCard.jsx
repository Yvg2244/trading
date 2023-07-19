import React,{useEffect, useState} from "react";

const PaperTradingCard = () => {
  const [show,setShow]=useState(false)
  const showButton=()=>{
    setShow(!show)
  }
  useEffect(()=>{},[show])
  return (
    <div onMouseEnter={()=>{showButton}} className="card col-span-4 bg-[#E18E91] rounded-md  w-60 text-black text-lg shadow-xl">
      <div className="card-body flex flex-row p-0">
        <div className="flex items-center p-4 flex-col">
          <div className="flex font-bold w-full justify-evenly">
            <span>AudiTT</span>
            <span>$40</span>
          </div>
          <button className="btn rounded-none bg-white w-48 text-black">
            Generate
          </button>
        </div>
        <div className={`bg-white ${show?"flex":"hidden"} h-full  justify-center items-center px-2`}>
        <button>&#62;</button>
      </div>
      </div>
      {/* <button className="btn">Generate</button> */}
    </div>
  );
};

export default PaperTradingCard;

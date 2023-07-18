import { useState } from "react";
import "./App.css";
import PaperTrading from "./Components/PaperTrading";
import MarketPlace from "./Components/MarketPlace";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PaperTrading />} />
        <Route path="marketplace" element={<MarketPlace />} />
      </Routes>
    
   
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import './IntroScreen.css'; 
import { useNavigate } from 'react-router-dom';


function IntroScreen() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="welcome">
      <h1>Welcome to this game</h1>
      </div>
      <p>You will be presented with 15 true or false questions.</p>
      <p>Can you score 100%?</p>
     
      <button className="myButton" onClick={() => navigate('/quiz')}>BEGIN</button>
      <div className="footer"></div>
    </div>
  );
}


export default IntroScreen;
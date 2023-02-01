import React, { useState, useEffect } from "react";
import './ResultsScreen.css'; 

import correct from './../../assets/images/correct.png';
import wrong from './../../assets/images/cross.png';

function ResultsScreen() {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
  

    useEffect(() => {
       
            setQuestions(JSON.parse(localStorage.getItem("questions")));
            setScore(JSON.parse(localStorage.getItem("score")));
          
     
    }, []);
  
    return (
      <div>
      <div className="results-screen">
      <a className="choice" href="/">Home</a>
        <p className="score">
        You scored {score}/{questions.length}
        </p>
        <ul className="question-list">
          {questions.map((question, index) => (
            <li className="question" key={index}>
             {index+1}. {question.correct_answer ===
              JSON.parse(localStorage.getItem("answers"))[index] ? (
                <img src={correct} className="icon"/>
              ) : (
                <img src={wrong} className="icon"/>
              )}
              {question.question}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer"></div>
      </div>
    );
  }

  export default ResultsScreen;
  
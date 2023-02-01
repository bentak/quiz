import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './QuizScreen.css';

function QuizScreen() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean"
        );
        const data = await res.json();
        setQuestions(data.results);
      }
      fetchData();
    }, []);
  
    useEffect(() => {
      localStorage.setItem("questions", JSON.stringify(questions));
    }, [questions]);
  
    useEffect(() => {
      localStorage.setItem("answers", JSON.stringify(answers));
    }, [answers]);
  
    useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score));
    }, [score]);
  
    if (currentIndex === questions.length) {
      navigate("/result");
    }
  
    const currentQuestion = questions[currentIndex];
  
    const handleClick = (answer) => {
      setAnswers([...answers, answer]);
      if (answer === currentQuestion.correct_answer) {
        setScore(score + 1);
      }
      setCurrentIndex(currentIndex + 1);
    };
  
    return (
      <div className="main">
        {questions.length > 0 && (
          <>
            <p>
              {`Question ${currentIndex + 1}/ ${questions.length}`}
            </p>
            <p className="">Category: {currentQuestion.category}</p>
            <p>Difficulty: {currentQuestion.difficulty}</p>
            <div className="question" >
            <p>{currentQuestion.question}</p>
            </div>
            <button className="choice" onClick={() => handleClick("True")}>True</button>
            <button className="choice" onClick={() => handleClick("False")}>False</button>
          </>
        )}
        <div className="footer"></div>
      </div>
    );
  }
  
  export default QuizScreen;
  
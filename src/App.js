import React from 'react';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import IntroScreen from './components/IntroScreen/IntroScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import ResultsScreen from './components/ResultsScreen/ResultsScreen';

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path='/result' element={<ResultsScreen/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;







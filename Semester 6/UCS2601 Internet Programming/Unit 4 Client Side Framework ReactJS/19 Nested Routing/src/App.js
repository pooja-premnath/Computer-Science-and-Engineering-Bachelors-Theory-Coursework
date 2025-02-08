import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Team from './Team';

function GoToNextPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>App Component</h1>
      <button onClick={handleButtonClick}>Go to About Page</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoToNextPage />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </Router>
  );
}

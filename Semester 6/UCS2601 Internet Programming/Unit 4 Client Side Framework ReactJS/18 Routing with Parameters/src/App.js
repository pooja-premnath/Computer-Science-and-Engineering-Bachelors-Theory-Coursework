import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';

function GoToNextPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/about?input=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <h1>App Component</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button onClick={handleButtonClick}>Go to About Page</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoToNextPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

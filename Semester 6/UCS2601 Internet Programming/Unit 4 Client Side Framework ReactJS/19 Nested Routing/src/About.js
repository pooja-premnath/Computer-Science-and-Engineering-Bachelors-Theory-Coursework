import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Team from './Team';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="team">Meet the Team</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default About;

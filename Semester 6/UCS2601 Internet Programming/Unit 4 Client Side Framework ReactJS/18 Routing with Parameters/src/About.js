import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const input = params.get('input');

  return (
    <div>
      <h1>About Page</h1>
      {input && <p>You entered: {input}</p>}
    </div>
  );
};

export default About;

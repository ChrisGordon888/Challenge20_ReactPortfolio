import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    // Handle any necessary actions on the start page
    // Then navigate to the AboutMePage
    navigate('/about');
  };

  return (
    <div className="start-page">
      <h2 className="start-heading">Welcome to My Application</h2>
      <button className="start-button" onClick={handleStart}>
        START
      </button>
    </div>
  );
};

export default StartPage;
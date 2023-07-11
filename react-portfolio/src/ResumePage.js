import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  // This is an example. You should replace it with your real data.
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'etc...'];

  return (
    <div className="resume">
      <h2>Resume</h2>
      <a href="path-to-your-resume" className="resume-link">Downloadable Resume</a>
      <h3>Proficiencies</h3>
      <ul className="resume-skills">
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumePage;
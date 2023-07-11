import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'placeholder-image1.jpg',
      link: 'https://example.com/project1',
      repo: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      image: 'placeholder-image2.jpg',
      link: 'https://example.com/project2',
      repo: 'https://github.com/example/project2',
    },
    {
      title: 'Project 3',
      image: 'placeholder-image3.jpg',
      link: 'https://example.com/project3',
      repo: 'https://github.com/example/project3',
    },
    {
      title: 'Project 4',
      image: 'placeholder-image4.jpg',
      link: 'https://example.com/project4',
      repo: 'https://github.com/example/project4',
    },
    {
      title: 'Project 5',
      image: 'placeholder-image5.jpg',
      link: 'https://example.com/project5',
      repo: 'https://github.com/example/project5',
    },
    {
      title: 'Project 6',
      image: 'placeholder-image6.jpg',
      link: 'https://example.com/project6',
      repo: 'https://github.com/example/project6',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Here is my most recent Portfolio:</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <a href={project.link}>Deployed Application</a>
          <a href={project.repo}>GitHub Repository</a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;
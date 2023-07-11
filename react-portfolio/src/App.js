import React from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import AboutMePage from './AboutMePage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';
import Footer from './Footer';
import './Footer.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
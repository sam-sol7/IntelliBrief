import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <nav>
    <Link to="/" className="nav-logo-container">
        <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" />
        <h2>IntelliBrief</h2>
    </Link>
    <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/NoteSummarizer">Note Summarizer</Link>
        <Link to="/QuizGenerator">Quiz Generator</Link>
        <a href="">About</a>
    </div>
  </nav> 
  );
};

export default Navbar;
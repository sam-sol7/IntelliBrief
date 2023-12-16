import React from 'react';

const Navbar = () => {
  return (
  <nav>
    <div className="nav-logo-container">
        <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" />
        <h2>IntelliBrief</h2>
    </div>
    <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href=""></a>
    </div>
  </nav> 
  );
};

export default Navbar;
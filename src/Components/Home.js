import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return ( 
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-text-section">
                <h1 className="primary-heading">IntelliBrief</h1>
                <p className="primary-text">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
                <button className="secundary-button">
                    Start Learning!
                </button>
            </div>
        </div>
    </div>
    );   
};

export default Home;
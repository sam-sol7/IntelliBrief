import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            {/* <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" /> */}
            {/* <img src="./logo-intellibrief.png" alt="Logo of IntelliBrief"/> */}
            <div className="home-text-section">
                <img width="100" height="100" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" />
                <h1 className="primary-heading">IntelliBrief</h1>
                <p className="primary-text">
                    AI-Powered Note Summarizer and Quiz Generator!
                </p>
                {/* <button className="secondary-button">
                    Start Learning!
                </button> */}
                <Link className="secondary-button" to="/NoteSummarizer">Start Learning!</Link>

            </div>
        </div>
    </div>
    );   
};

export default Home;
import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";

const About = () => {
  return ( 
    <div className="App">
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            {/* <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" /> */}
            {/* <img src="./logo-intellibrief.png" alt="Logo of IntelliBrief"/> */}
            <div className="home-text-section">
                <img width="100" height="100" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" />
                <h1 className="primary-heading">About us</h1>
                <p className="primary-text">
                    IntelliBrief is an AI-Powered Note Summarizer and Quiz Generator meant to help students from all background get a better understanding on their classes.
                </p>
                <p className="primary-text">
                    If you have any questions feel free to reach out to me through
                    
                    
                    github.com/sam-sol7/ or linkedin.com/in/samuel-sol/
                </p>

                {/* <button className="secondary-button">
                    Start Learning!
                </button> */}
                {/* <Link className="secondary-button" to="/NoteSummarizer">Start Learning!</Link> */}

            </div>
        </div>
    </div>
    </div>
    );   
};

export default About;
import React from 'react';
import Navbar from '../Components/Navbar'

const NoteSummarizer = () => {
    return ( 
    <div className="App">
      <div className="home-container">
          <Navbar/>
          <div className="home-banner-container">
              {/* <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" /> */}
              {/* <img src="./logo-intellibrief.png" alt="Logo of IntelliBrief"/> */}
              <div className="home-text-section">
                  <h1 className="primary-heading">Note Summarizer</h1>
                  <p className="primary-text">
                      AI-Powered Note Summarizer
                  </p>
                  <button className="secondary-button">
                      Insert Image or Text
                  </button>
              </div>
          </div>
      </div>
    </div>
    );   
};

export default NoteSummarizer;
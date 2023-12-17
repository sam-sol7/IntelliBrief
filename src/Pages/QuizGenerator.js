// import React from 'react';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import axios from 'axios';

const QuizGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const HTTP = 'http://localhost:8020/chat';

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${HTTP}`, { prompt }).then(res => setResponse(res.data)).catch(error=>{
        console.log(error);
        });
    };

    const handlePrompt = (e) => setPrompt(e.target.value);


    return ( 
    <div className="App">
      <div className="home-container">
          <Navbar/>
          <div className="home-banner-container">
              {/* <img width="80" height="80" src="https://img.icons8.com/dotty/80/tuition.png" alt="React Image" /> */}
              {/* <img src="./logo-intellibrief.png" alt="Logo of IntelliBrief"/> */}
              <div className="home-text-section">
                  <h1 className="primary-heading">Quiz Generator</h1>
                  <p className="primary-text">
                      AI-Powered Note Summarizer
                  </p>
                  {/* <button className="secondary-button">
                      Insert Image or Text
                  </button> */}
              </div>
          </div>
      </div>
      <div className="noteSumBody">

        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label id="textarea-label">Insert your notes!</label>
            <textarea id="note-input"rows="10" placeholder="Enter text " value={prompt} onChange={handlePrompt}/>
            <input id="submit-form" type="submit" value="Generate questions"/>
        </div>

        </form>
        {/* <div> */}
            <textarea rows="20" readOnly>
                {response ? response : 'Please insert your notes first to use the question generator'}
            </textarea>
        {/* </div> */}
        </div>
    </div>
    );   
};

export default QuizGenerator;
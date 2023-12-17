import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [prompt, setPrompt] = useState('');
  // const [response, setResponse] = useState('');
  // const HTTP = 'http:localhost:8020/NoteSummarizer';

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`${HTTP}`, { prompt }).then(res => setResponse(res.data)).catch(error=>{
  //     console.log(error);
  //   });
  // };
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
        <Link to="/About">About</Link>
    </div>

    {/* <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Ask Questions</label>
      </div>
    </form> */}
  </nav> 
  );
};

export default Navbar;
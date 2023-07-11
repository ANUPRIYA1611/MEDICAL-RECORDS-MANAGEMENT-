import React from 'react';
import './Home.css';
function Home(){
    return(
    <div className="homebody">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="sidebar">
    <a className="active" href="#home">
      MEDICAL REPORT MANAGEMENT
    </a>
    <a href="#news">NEWS</a>
    <a href="#contact">CASE STUDY</a>
    <a href="#about">SERVICES</a>
  </div>
        <div className="nav-links">
          <a target="_blank">HOME</a>
          <a target="_blank">PROFILE</a>
          <a target="_blank">ABOUT US</a>
        </div>
      </div>
      </div>
    ); 
}
export default Home;
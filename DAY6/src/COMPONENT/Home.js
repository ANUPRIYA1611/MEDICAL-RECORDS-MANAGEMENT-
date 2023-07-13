import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
function Home(){
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
    return(
    <div className="homebody">
       <div id="mySidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
<a href="#">     </a>
<br></br>
<br></br>
<a href="#">PROFILE</a>
<br></br>
<a href="#">CASE STUDIES</a>
<br></br>
<a href="#">DOCTORS</a>
<br></br>
<a href="#">DOCUMENTS</a>
<br></br>
<a href="#">CONTACT</a>
</div>
      <div className="nav">
     
           <a className='but'>
          <button className="openbtn" onClick={openNav}>&#9776;</button>
         </a>
        <div className="nav-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/signup">SIGNUP</Link>
          <Link to="/">LOGOUT</Link>
        </div>
      </div>
  <div className="card">
    <div>
     
      <div className="ehr">
        <h2 className="h">EHR</h2>
        <Link to="/ehr"><img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpvcaoM9AXfvDQMLNuxOjqE_C6wrV1ZhQwY4w7mfTpWH1tTpHYXwfWVBmNvXzvYOPshY&usqp=CAU"></img></Link>
        <p className="hp">Medical information, such as medical history, diagnoses, medications, allergies,
test results, treatment plans, and progress notes.</p>
      </div>
      </div>
      </div>
    <div className="card1">
    <div>
      <div className="app">
        <h2 className="h">APPOINTMENT SCHEDULING</h2>
        <Link to="/appointment"><img className="img2"src="https://i.pinimg.com/564x/9e/a1/c4/9ea1c4f022edd1189f392ff27c31f731.jpg"></img></Link>
        <p className="hp">Appointment calendars, schedule follow-ups, send appointment reminders to
patients, and track appointment history</p>
      </div>
      </div>
      </div>
      <div className="card2">
    <div>
      <div className="repo">
        <h2 className="h">REPORT</h2>
        <Link to="/report"><img classNAme="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8zXYQXmP6IQx0MnmRO6W8RNe5xxW1prSME4mVlTk9dxt46RQ2FaG1zCcFKTqXuK3eAQ&usqp=CAU"></img></Link>
        <p className="hp">Allowing healthcare providers to generate reports on patient
          demographics, diagnoses, treatments, and outcomes. </p>
      </div>
      </div>
      </div>
     </div>
    
    ); 
}
export default Home;
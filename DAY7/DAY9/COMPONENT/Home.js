import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Home({name}) {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div className="homebody">
     <ul className="main-navi">
 <li>
   <Link to="/signup">SIGNUP</Link>
 </li>
 <li style={{textAlign:"center",marginTop:"-5px"}}>{name}</li>
 <li>
 <Link to="/" className="logout">LOGOUT</Link>
 </li>

 <li className="but">
  <button className="openbtn"  onClick={openNav}>&#9776;</button>
  </li>
</ul>
      <div id="mySidepanel" className="sidepanel">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">     </a>
        <br></br>
        <br></br>
        <a href="#">PROFILE</a>
        <br></br>
        <Link to="/doctor" style={{ textDecoration: "none" }}>DOCTORS</Link>
        <br></br>
        <a href="#">DOCUMENTS</a>
        <br></br>
        <Link to="/contact" style={{ textDecoration: "none" }}>CONTACT</Link>
      </div>
      <div>
      <div className="bigcard">
        <div className="article-card">
          <div className="content">
            <p className="date">EHR</p>
            <p className="title">Medical history, diagnoses, medications,
              test results, treatment plans</p>
          </div>        
          <Link to="/ehr"><img src="https://img.hcinnovationgroup.com/files/base/ebm/hci/image/2021/06/bigstock_Ehr_Electronic_Health_Record_E_304383664.60b6968b95b09.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630" /></Link>
        </div>
      </div>
      
      <div className="bigcard1">
        <div className="article-card">
          <div className="content">
            <p className="date">APPOINTMENT SCHEDULING</p>
            <p className="title">Appointment calendars, schedule follow-ups,track appointment history</p>
          </div>
          <Link to="/appointment"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZcDxFLdMJkgotz9pVxq84rW_LLn85XpD0CKQdrARNlSlya4G11bvAfku5AwEa-Gx0UY&usqp=CAU" alt="article-cover" /></Link>
        </div>
      </div>
      <div className="bigcard2">
        <div className="article-card">
          <div className="content">
            <p className="date">REPORT</p>
            <p className="title">Allowing healthcare providers to generate reports
        diagnoses, treatments</p>
          </div>
          <Link to="/report"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUS-yJ9yIL76DxKgethvAL1Y5TQ0CR8ehlpQ&usqp=CAU" alt="article-cover" /></Link>
        </div>
      </div>
      <div>
       
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>SPECIALIZATION</h1>
      <br></br>
      <br></br>
      <div className="cardhome">
        <section className="homecards">
          <div className="s">
            <h2></h2>
          </div>
          <div className="spcard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTcLfM4iQHdxVpj-zkXsL-cePxGS6YeeSWKbDc22&s" className="surimg"></img>
            <h2>DERMATOLOGY</h2>
          </div>
          <div className="spcard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICWEOc_eYs8B4kIJ4jydfoDCBva6HS6V4j0N-XTg-&s" className="emrimg"></img>
            <h2>EMERGENCY</h2>
          </div>
          <div className="spcard">
            <img src="https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg" className="surimg"></img>
            <h2>SURGERY</h2>
          </div>
          <div className="spcard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzMgZSNkv5qZQm9EObmIgIUWMCldkOke1LWbOW_Sd&s" className="anaimg"></img>
            <h2>ANESTHESIOLOGY</h2>
          </div>
        </section>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>ABOUT US</h1>
      <div className="aboutcard">
      <p className="aboutp">A medical records management application is a software system designed to
digitize and streamline the storage, organization, and retrieval of patient medical
records in healthcare settings. It serves as a central repository for healthcare
providers to store and manage patient information electronically, replacing
traditional paper-based records.
Explore resources with advice on finding and evaluating software in our extensive library of the patients
</p>
</div>
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
    
    name:state.name,
    
  };
};
export default  connect(mapStateToProps)(Home)

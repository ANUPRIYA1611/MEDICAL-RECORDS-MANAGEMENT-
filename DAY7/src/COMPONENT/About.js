import react from 'react';
import './about.css';
import {Link} from 'react-router-dom';
function About(){
    return(
       <div>
        <div className="aboutcard">
        <div className="aboutnav">
          <Link to="/home">HOME</Link>
          </div>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="abouth2">US!!</h2>
          <p className="aboutp">Overwhelmed with endless software options and lackluster insights into the tools others in your industry love? We get it. That’s why at Our App,A medical records management application is a software system designed to
digitize and streamline the storage, organization, and retrieval of patient medical
records in healthcare settings. It serves as a central repository for healthcare
providers to store and manage patient information electronically, replacing
traditional paper-based records.
</p>
<br></br>

<p className="aboutp">-- Compare pricing for top software side-by-side without endless internet searches.</p>
<br></br>
<p className="aboutp">-- Get detailed product insights tailored to your records, backed by data and strategy.</p>
<br></br>
<p className="aboutp">-- Check out our Category Leaders to find the best of the best doctors and consultants.</p>
<br></br>
<p className="aboutp">-- Read and watch over 1M+ verified reviews from our patients and doctors.</p>
<br></br>
<p className="aboutp">-- Explore resources with advice on finding and evaluating software in our extensive library of the patients.</p>
<br></br>
<p className="abouth2">MILESTONES</p>
<p className="aboutp">(2023)-- CREATED</p>
<p className="aboutp">TO BE CONTINUED..</p>
        </div>
        
       </div>
    );
}
export default About;
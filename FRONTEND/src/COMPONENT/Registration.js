import React,{useState} from 'react';
import './registration.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
function Registration(){
  const navigate=useNavigate();
  const [signupName, setSignupName] = useState('');
    const [signupNumber, setSignupNumber] = useState('');
    const[signupEmail,setSignupEmail]=useState('');
    const[signupGender,setSignupGender]=useState('');
    const [signupDob, setSignupDob] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupInsurance, setSignupInsurance] = useState('');
    
    const handlePost = (event) => {
      event.preventDefault();
      const data = {
        name: signupName,
        number: signupNumber,
        gender:signupGender,
        email: signupEmail,
        dob: signupDob,
        password: signupPassword,
        insurance: signupInsurance,
      };
  
      axios.post('http://localhost:8181/api/v1/auth/register', data);
      alert("successful");
      navigate("/");
      
     
    
        if (signupName.trim() === '') {
          alert('Enter a Patient name.');
          return;
        }
        if (signupNumber.trim() === '' || signupPassword.trim() === '' || signupDob.trim()==='' || signupEmail.trim()==='') {
          alert('Enter valid signup credentials.');
          return;
        }
        
      };
    return(
      <div className="loginbody">
        <div className="main">  	
        
        <div className="signup">
          <form >
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="Patient name" value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
            <input type="text" name="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
            <input type="number" name="phonenum" placeholder="Contact number" value={signupNumber} onChange={(e) => setSignupNumber(e.target.value)} required />
            <select className="option" value={signupGender} onChange={(e) => setSignupGender(e.target.value)} >
              <option style={{color:"#e0dede"}}>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" name="dob" placeholder="Date of birth" value={signupDob} onChange={(e) => setSignupDob(e.target.value)} required />
            <select className="option"  value={signupInsurance} onChange={(e) => setSignupInsurance(e.target.value)} >
              <option style={{color:"black"}}>Insurance</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input type="password" name="pswd" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
            <div>
                <button onClick={handlePost}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
    }
export default Registration;
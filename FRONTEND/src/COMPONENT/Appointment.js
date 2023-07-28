import React, { useState, useEffect } from 'react';
import './appointment.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Appointment() {
  const [appointments, setAppointments] = useState([]);
 
  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/api/v1/demo/app/getapp', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  const handleFormSubmit = async (e) => {
  
  alert("YOUR APPOINTMENT IS SCHEDULED SUCCESSFULLY");
  };
  
  return (
    <div className="side">
        <Link to="/home"><img className="a1img" src="https://thumbs.dreamstime.com/b/mobile-191030798.jpg"></img></Link>
    <div>
      <div className="appcard">
        <h1 className="apph1">APPOINTMENT SCHEDULING</h1>
        <br />
        {appointments.map(appointment => (
          <React.Fragment key={appointment.name}>
            <h2 className="apph2">NAME OF THE PATIENT: {appointment.name}</h2>
            <br />
            <h2 className="apph2">NAME OF THE DOCTOR: {appointment.doctorname}</h2>
            <br />
            <h2 className="apph2">SCHEDULING TIME: {appointment.time}</h2>
            <br />
            <h2 className="apph2">SCHEDULING DATE: {appointment.date}</h2>
            <br />
            <h2 className="apph2">GENERAL FEES: {appointment.fees}</h2>
            <br />
            <br />
            <h2 className="apph2">HISTORY: {appointment.history}</h2>
          </React.Fragment>
        
        ))}  
        </div>
    <div>
    <img className="aimg" src="https://i.pinimg.com/564x/ef/9c/4b/ef9c4be693883099633473efbd0754ab.jpg"></img>
    </div>
    <div className="appcard1">
    <form onSubmit={handleFormSubmit}>
      <h1 className="ah1">SCHEDULE YOURS</h1>
          <input className="in" type="text" name="name" placeholder="NAME" required ></input>
          <input className="in" type="text" name="doctorname" placeholder='DOCTOR NAME' required ></input> 
          <input className="in" type="text" name="date" placeholder="DATE" required ></input>
         
          <input className="in" type="text" name="date" placeholder="TIME" required ></input>
          <button type="submit" >Submit</button>
        </form>
    </div>
      </div>
    </div>
    
  );
}

export default Appointment;

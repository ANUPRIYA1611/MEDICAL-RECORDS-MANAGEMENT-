import React, { useState, useEffect } from 'react';
import './appointment.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend using Axios when the component mounts
    axios.get('http://localhost:8080/getapp')
      .then(response => {
        setAppointments(response.data); // Set the fetched data to the 'appointments' state
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <h1 className="linkh1"><Link to="/home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></h1>
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
            <h2 className="apph2">HISTORY: {appointment.history}</h2>
            <br />
          </React.Fragment>
        ))}
        <div>
          <div className="apphistory"></div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;

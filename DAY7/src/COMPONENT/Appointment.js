import React from 'react';
import './appointment.css';
import {Link} from 'react-router-dom';
function Appointment(){
    return(
        <div>
            <h1 className="linkh1"><Link to="/home" style={{textDecoration:"none",color:"white"}}>HOME</Link></h1>
            <div className="appcard">
            
                <h1 className="apph1">APPOINTMENT SCHEDULING</h1>
                <br></br>
                <h2 className="apph2">NAME OF THE PATIENT:</h2>
                <br></br>
                <h2 className="apph2">NAME OF THE DOCTOR:</h2>
                <br></br>
                <h2 className="apph2">SCHEDULING TIME:</h2>
                 <br></br>
                <h2 className="apph2">SCHEDULING DATE:</h2>
                <br></br>
                <h2 className="apph2">CHECK-UPS:</h2>
                <br></br>
                <h2 className="apph2">GENERAL FEES:</h2>
                <br></br>
                <h2 className="apph2">HISTORY:</h2>
                <br></br>
                <div>
                    <div className="apphistory">

                    </div>
                </div>
            </div>
            
          
        </div>
    );
}
export default Appointment;
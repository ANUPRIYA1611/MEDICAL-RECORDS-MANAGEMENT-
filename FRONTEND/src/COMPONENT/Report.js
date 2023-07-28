import React, { useState, useEffect } from 'react';
import './report.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/api/v1/demo/report/getreport', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`
          },
        });
        setReports(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  return (
    <div>
      {/* <h1 className="linkh1"><Link to="/home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></h1> */}
      <div className="reportcard1">
        <div>
          <div className="guide">
            <h1 className="reporth1">GUIDELINES</h1>
            <p className="reportp">Detailed documentation of a patient's history such as consultations, medical examination and findings, test results, medications that are taken</p>
            <br></br>
          </div>
        </div>
      </div>
      <div className="reportcard2">
        <div>
          <div className="prescription">
            <h1 className="reporth1">PRESCRIPTION</h1>
            <p className="reportp">Description of criteria for specific diagnosis.
Evaluation methods.
Procedures.
Tests.

Observations.
Specific results.
</p>
          </div>
        </div>
      </div>
      <div className="reportcard3">
        <div>
          <div className="report">
            <h1 className="reporth1">REPORT</h1>
            {/* Display the fetched reports */}
            {reports.map((report, index) => (
              <div key={index} className="report-item">
                <p>{report.report}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/home"><img className="rimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt-qSj0w4A7edDjBlGK2HjNEp01GCAT_JoH3l_q_vANIPc7cgda7573Btjgy6nun2RBo&usqp=CAU"></img></Link>
    </div>
  );
}

export default Report;

import React, { useState, useEffect } from 'react';
import './report.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:8080/getreport')
      .then(response => {
        setReports(response.data); // Set the fetched data to the 'reports' state
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="linkh1"><Link to="/home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></h1>
      <div className="reportcard1">
        <div>
          <div className="guide">
            <h1 className="reporth1">GUIDELINES</h1>
          </div>
        </div>
      </div>
      <div className="reportcard2">
        <div>
          <div className="prescription">
            <h1 className="reporth1">PRESCRIPTION</h1>
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
    </div>
  );
}

export default Report;

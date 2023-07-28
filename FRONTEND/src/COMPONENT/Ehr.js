import React, { useEffect, useState } from 'react';
import './ehr.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Ehr() {
  const [ehrData, setEhrData] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
        try {
          const response = await axios.get('http://localhost:8181/api/v1/demo/ehr/getehr1'
          ,{
            headers: {
              "cache-control": 'no-cache',
              "Authorization": `Bearer ${token}`
            },
          }); 

          // console.log(response.data);
          setEhrData(response.data);
          console.log("response.data",response)
        } catch (error) {
          console.log(error);
    }
  };
  fetchTaskData();
}, []);
  return (
    <div className="ehrmain">
     
      <div>
        <h2 className="ehrh">Electronic Health Records (EHR)</h2>
        <div>
          <div className="ehrhistory">
            <h2 className="ehrname">HISTORY</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.history}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="ehrplans">
            <h2 className="ehrname">PLANS</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.plans}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="ehrresults">
            <h2 className="ehrname">RESULTS</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.results}</li>
              ))}
            </ul>
          </div>
        </div>
      <Link to="/home"><img className="e1img" src="https://thumbs.dreamstime.com/b/mobile-191030798.jpg"></img></Link>
        <div>
          <img className="eimg" src="https://appinventiv.com/wp-content/uploads/sites/1/2022/07/How-to-build-an-EHR-system-02.webp"></img>
      </div>
      </div>
    </div>
  );
}

export default Ehr;
import React from 'react';
import './ehr.css';
import {Link} from 'react-router-dom';
function Ehr(){
    return(
        <div>
            <h1 className="linkh1"><Link to="/home" style={{textDecoration:"none",color:"white"}}>HOME</Link></h1>
            <div className="ehrmain">
               <h2 className="ehrh">Electronic Health Records (EHR)</h2>
                <div>
                    <div className="ehrhistory">
                       <h2 className="ehrname">HISTORY</h2>
                    </div>
                </div>
                <div>
                    <div className="ehrplans">
                          <h2 className="ehrname">PLANS</h2>
                    </div>
                </div>
                <div>
                    <div className="ehrresults">
                       <h2 className="ehrname">RESULTS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ehr;
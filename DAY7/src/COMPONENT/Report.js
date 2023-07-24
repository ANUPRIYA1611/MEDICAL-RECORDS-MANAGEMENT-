import react from 'react';
import './report.css';
import {Link} from 'react-router-dom';
function Report(){
    return(
        <div>
        <h1 className="linkh1"><Link to="/home" style={{textDecoration:"none",color:"white"}}>HOME</Link></h1>
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
               </div>
           </div>
        </div>
        </div>
    );
}
export default Report;
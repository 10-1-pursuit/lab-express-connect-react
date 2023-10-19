import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./AllLogs.css"

function AllLogs({index}) {

    const [logs, setLogs] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {

        fetch(`${API}/logs`)
            .then((response) => response.json())
            .then((responseJSON) => setLogs(responseJSON))
            .catch((error) => console.error(error));
    });

    return (
        <div className="logs-container">
        {logs.map((log, index) => (
          <div className="front" key={index}>
            <div className="mistake">
              <h2>{[log.mistakesWereMadeToday].join('')}</h2>
            </div>
            <div className="captain">
              <h2>{log.captainName}</h2>
            </div>
            <div className="captainTitle">
              <h2> <Link to={`/logs/${index}`}className="linktag"> {log.title}</Link></h2>
            </div>
          </div>
        ))}
      </div>
    );

    
}

export default AllLogs








// <>

//     <div className="wholeInd">

//         <div className="mistakes">
//             {logs.map((log, index) => (
//                 <div className="index" key={index}>
//                     {[log.mistakesWereMadeToday].join(' ')}
//                 </div>
//             ))}
//         </div>

//         <div className="captainName">
//             {logs.map((log, index) => (
//                 <div className="index" key={index}>
//                     {log.captainName}
//                 </div>
//             ))}
//         </div>

//         <div className="title">
//             {logs.map((log, index) => (
//                 <div className="index" key={index}>
//                     {log.title}
//                 </div>
//             ))}
//         </div>

//     </div>
// </>
import React, { useState, useEffect } from 'react'

import "./IndexPage.css"

function IndexPage() {

    const [logs, setLogs] = useState([]);
    // const API = process.env.REACT_APP_API_URL

    useEffect(() => {

        fetch('http://localhost:3001/logs')
            .then((response) => response.json())
            .then((responseJSON) => setLogs(responseJSON))
            .catch((error) => console.error(error));
    });

    return (
        <>

            {logs.map((log) => {

                return (

                    <div className="front">

                        <div>                      
                            {[log.mistakesWereMadeToday].join('')}
                        </div>

                        <hr />

                        <div>
                            {log.captainName}
                        </div>

                        <hr />

                        <div>                           
                            {log.title}
                        </div>

                    </div>
                )

            })}

        </>

    )
}

export default IndexPage








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
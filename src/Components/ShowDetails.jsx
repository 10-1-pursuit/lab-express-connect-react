//- A user can click on a specific log and see more details
import { useEffect, useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom"

function ShowDetails({ log, index }) {

const handleDelete=()=>{

    fetch(`${API}/logs/${index}`, { method: "DELETE" })
    .then(() => {
      navigate(`/logs`);
    })
    .catch((error) => console.error(error));
};


return (
    
    <div key={index} className="container show">
            <div className="box log">
                <h1>{log.title}</h1>
                <h3>{log.captainName}</h3>
                <section>
                    <p>{log.post}</p>
                </section>
                <h4>{log.mistakesWereMadeToday}</h4>
                <h5>{log.daysSinceLastCrisis}</h5>
            </div>
             <div>
                <button onClick={handleDelete}> Delete</button>
             </div>
        </div>

)

}


export default ShowDetails;
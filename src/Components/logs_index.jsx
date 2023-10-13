import { response } from "express";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

function logs_index(){

    const [logs, setLogs] = useState([])
    console.log(logs)
    
    useEffect(( ) =>{
        fetch(`${API}/logs`)
        .then(((response) => response.json()))
        .then( (responseJSON) => setLogs(responseJSON))
        .catch((error) => console.error(error))
    });
    
    
    return (
        <div className="Logs">

     <section>
        {logs.map((log, index) => {
            return <li key={index}>{log.title}</li>
        })}
     </section>


   </div>

)

}


export default logs_index;

// A user can see a list of all the logs
//import { response } from "express";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function Logs_index(){
    
    const [logs, setLogs] = useState([])
    
    useEffect(() => {
        
        //const API = import.meta.env.VITE_API_URL;

        fetch(`http://localhost:4000/logs`)
        .then(((response) => response.json()))
        .then((responseJSON) => setLogs(responseJSON))
        .catch((error) => console.error(error))
    }, []);
    
    console.log(logs)

    return (
        <div className="LogsIndex">
            <h3>Captain's Logs</h3>
            <section>
                <ul>
                    {logs.map((log, index) => {
                        return (
                            <li key={index}>
                                <h4>{log.title}</h4>
                                <p>{log.captainName}</p>
                                <Link to={`/logs/${index}`}> {log.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )

};


export default Logs_index;
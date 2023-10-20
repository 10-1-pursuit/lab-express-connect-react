
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./Logs_index.css"

function Logs_index(){
    
    const [logs, setLogs] = useState([])
    
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(() => {

        fetch(`${API}/logs`)
        .then(((response) => (response.json())))

        .then((responseJSON) => setLogs(responseJSON))
        .catch((error) => console.error(error))
    }, []);
    
   

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
                                <Link to={`/logs/${index}`}> Go to: {log.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )

};


export default Logs_index;
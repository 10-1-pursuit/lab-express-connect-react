import { response } from "express";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

function logs_index({logs, index}){

    const [logs, setLogs] = useState([])
    console.log(logs)

    useEffect(() => {
        fetch(`${API}/logs`)
            .then(((response) => response.json()))
            .then((responseJSON) => setLogs(responseJSON))
            .catch((error) => console.error(error))
    });


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
                                <a href="`/${index}`"></a>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )

}


export default logs_index;
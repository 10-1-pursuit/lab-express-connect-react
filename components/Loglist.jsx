import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


const LogList = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/logs`)
            .then((res) => setLogs(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Logs</h1>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        <Link to={`/logs/${index}`}>{log.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogList;
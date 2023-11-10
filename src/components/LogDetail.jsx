import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


const LogDetail = () => {
    const { index } = useParams();
    const [log, setLog] = useState({});
    const history = useNavigate();

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((res) => setLog(res.data))
            .catch((error) => console.log(error));
    }, [index]);

    const handleDelete = () => {
        axios
            .delete(`${API}/logs/${index}`)
            .then(() => {
                history("/logs");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>{log.title}</h1>
            <p>Captain: {log.captainName}</p>
            <p>Post: {log.post}</p>
            <p>Mistakes Were Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
            <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
            <Link to="/logs">Back</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default LogDetail;

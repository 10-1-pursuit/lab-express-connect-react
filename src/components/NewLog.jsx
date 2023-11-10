import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const NewLog = () => {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setLog({ ...log, [name]: newValue });
    };

    const handleSubmit = () => {
        axios
            .post(`${API}/logs`, log)
            .then(() => {
                history("/logs");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Create New Log</h1>
            <form>
                <label>
                    Captain Name:
                    <input type="text" name="captainName" onChange={handleChange} value={log.captainName} />
                </label>
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleChange} value={log.title} />
                </label>
                <label>
                    Post:
                    <input type="text" name="post" onChange={handleChange} value={log.post} />
                </label>
                <label>
                    Mistakes Were Made Today:
                    <input type="checkbox" name="mistakesWereMadeToday" onChange={handleChange} checked={log.mistakesWereMadeToday} />
                </label>
                <label>
                    Days Since Last Crisis:
                    <input type="number" name="daysSinceLastCrisis" onChange={handleChange} value={log.daysSinceLastCrisis} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <Link to="/logs">Back</Link>
        </div>
    );
};

export default NewLog;

import react, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const API = "http://localhost:5555"
        fetch(`${API}/logs`).then(res => res.json()).then(data => setLogs(data)).catch(err => console.error(err));
    }, [logs]);

    const handleDelete = () => {
        const logToDelete = logs[index];
        if (!logToDelete) return;

        const API = "http://localhost:5555";
        fetch(`${API}/logs/${index}`, { method: "DELETE" })
            .then((res) => {
                if (res.status === 204) {
                    console.log("Log deleted successfully");
                    const updatedLogs = logs.filter((log, i) => i !== index);
                    setLogs(updatedLogs);
                    navigate("/logs");
                } else {
                    console.error("Failed to delete log");
                }
            })
            .catch((err) => console.error(err));
    };

    const handleEdit = () => {
        navigate(`/logs/${index}/edit`);
    }

    return (
        <div>
            <h2>Logs</h2>
            {index ? (
                <div>
                    <h3>Log Details</h3>
                    <p>Captain: {logs[index].captainName}</p>
                    <p>Title: {logs[index].title}</p>
                    <p>Post: {logs[index].post}</p>
                    <p>MistakesWereMadeToday: {logs[index].mistakesWereMadeToday ? "Yes" : "No"}</p>
                    <p>DaysSinceLastCrisis: {logs[index].daysSinceLastCrisis}</p>
                    <button onClick={() => navigate("/logs")}>Back</button>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ) : (
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>
                            <Link to={`/logs/${index}`}>{log.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default Logs;
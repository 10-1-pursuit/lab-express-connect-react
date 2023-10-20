import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditLog = () => {
    const { index } = useParams();
    const navigate = useNavigate();

    const [logData, setLogData] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    useEffect(() => {
        const fetchLogData = () => {
            const API = "http://localhost:5555";
            fetch(`${API}/logs/${index}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error("Failed to fetch log data");
                    }
                })
                .then((data) => {
                    setLogData(data);
                })
                .catch((error) => {
                    console.error("Error fetching log data:", error);
                });
        };

        fetchLogData();
    }, [index]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLogData({
            ...logData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const API = "http://localhost:5555";
        fetch(`${API}/logs/${index}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logData),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.error("Failed to update log");
                }
            })
            .then((data) => {
                console.log("Log updated successfully");
                navigate(`/logs`);
            })
            .catch((err) => console.error("Error updating log:", err));
    };

    return (
        <div>
            <h2>Edit Log Entry</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="captainName">Captain Name:</label>
                    <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={logData.captainName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={logData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="post">Post:</label>
                    <textarea
                        type="text"
                        id="post"
                        name="post"
                        value={logData.post}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>
                        Mistakes Were Made Today:
                        <input
                            type="checkbox"
                            name="mistakesWereMadeToday"
                            checked={logData.mistakesWereMadeToday}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                    <input
                        type="number"
                        id="daysSinceLastCrisis"
                        name="daysSinceLastCrisis"
                        value={logData.daysSinceLastCrisis}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditLog;
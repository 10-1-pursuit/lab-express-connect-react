import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewLogForm = () => {
  const navigate = useNavigate();
  const [logData, setLogData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

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
    fetch(`${API}/logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    })
      .then((data) => {
        alert("Log submitted successfully!");
        navigate("/logs");
      })
      .catch((error) => {
        console.error("Error submitting log:", error);
      });
  };

  return (
    <div>
      <h2>New Log Entry</h2>
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
          <input
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewLogForm;
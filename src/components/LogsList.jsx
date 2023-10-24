import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LogsList.css";

const apiKey = process.env.REACT_APP_API_KEY;

const LogsIndex = () => {
  const [logs, setLogs] = useState(null);

  useEffect(() => {
    try {
      fetch(`${apiKey}/logs`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => setLogs(data))
        .catch((error) => console.error("Fetch error:", error));
    } catch (error) {
      console.error("Other error:", error);
    }
  }, []);

  return (
    <div className="centered-table">
      <table>
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log, index) => (
              <tr key={index}>
                <td>{log.mistakesWereMadeToday ? "YES" : "NO"}</td>
                <td>{log.captainName}</td>
                <td>
                  <Link to={`/logs/${index}`}>{log.title}</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsIndex;

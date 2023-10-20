import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function LogsPage() {
  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    fetchLogs();
  }, []);

  // Index Route
  async function fetchLogs() {
    try {
      let result = await axios.get(`${API}/logs`);
      console.log(result.data);
      setLogs(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   //console.log(API);
  //   fetch(`${API}/logs`)
  //     .then((res) => res.json())
  //     .then((data) => setLogs(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      <h2>Index</h2>
      <table>
        <tbody>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
          {logs.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>💥</td>
                  <td>{item.captainName}</td>
                  <td>{item.title}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LogsPage;

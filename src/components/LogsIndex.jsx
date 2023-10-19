import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './LogsIndex.css';

export default function LogsIndex () {
const [logs, setLogs] = useState(null);

useEffect(() => {
    try {
      fetch('http://localhost:4040/logs')
        .then(res => {
          if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => setLogs(data))
        .catch(error => console.error('Fetch error:', error));
    } catch (error) {
      console.error('Other error:', error);
    }
  }, []);

  return (
    <>
      <h1>Index</h1>
      <div className="table-wrapper">
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
                  <td>{log.mistakesWereMadeToday ? 'Yes' : 'No'}</td>
                  <td>{log.captainName}</td>
                  <td><Link to={`/logs/${index}`}>Read This Log</Link></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
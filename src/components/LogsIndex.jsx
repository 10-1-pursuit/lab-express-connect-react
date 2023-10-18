import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

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
      <div className="table-responsive">
        <table className="table table-bordered">
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
                  <td className="border-cell">
                    {log.mistakesWereMadeToday ? 'Yes' : 'No'}
                  </td>
                  <td className="border-cell">{log.captainName}</td>
                  <td className="border-cell">
                    <Link to={`/logs/${index}`}>Read This Log</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
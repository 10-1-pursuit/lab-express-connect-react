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
      {logs === null && <div>Loading...</div>}
      {logs && (
        <>
          {logs.map((log, index) => {
            //  console.log(log.id)
            return (
              <div key={index}>
                <Link to={`/logs/${index}`}>
                  {console.log(index)}
                <h3>{log.title}</h3>
                </Link>
                {/* <p>{log.post}</p>
                <p>Captain: {log.captainName}</p>
                <p>Mistakes: {log.mistakesWereMadeToday ? 'Yes' : 'No'}</p>          
                <p>Days Since Incident: {log.daysSinceLastCrisis}</p> */}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
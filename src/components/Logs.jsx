import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Log from './Log'

const API = process.env.REACT_APP_API_URL;

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/logs`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setLogs(res))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <>
      <div className="logs container text-center">
      

          {logs.map((log, id) => (
            
            <div className="captain-card row" key={id}>

              <div className="mistakes col">
                <h2> Made Mistakes: {[log.mistakesWereMadeToday].join("")}</h2>
              </div>

              <div className="captain-name link-info col">
                <h2>Captain {log.captainName}</h2>
              </div>

              <div className="captain-title col">
                <h2>
                  {" "}
                  <Link to={`/logs/${id}`} className="link-opacity-50-hover">
                    Title: {log.title}
                  </Link>
                </h2>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Logs;

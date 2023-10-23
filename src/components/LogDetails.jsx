import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const LogDetails = ({}) => {
  const [log, setLog] = useState({
    title: "",
  });
  const { index } = useParams();
  console.log("yo", index)
 const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setLog(res))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  function handleDeleteCaptain() {
    fetch(`${API}/logs/${index}`, { method: "DELETE" })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  }

  if (!log) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h3>{log.title}</h3>
      {/* <p>Captain: {log.captainName}</p>
      <p>Post: {log.post}</p>
      <p>
        Mistakes Were Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}
      </p>
      <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p> */}

      {/* <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button className=" btn btn-secondary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDeleteCaptain}>Delete</button>
        </div>
      </div> */}
    </>
  );
};

export default LogDetails;

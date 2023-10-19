import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

 const API = process.env.REACT_APP_API_URL;

function SingleIndex() {


  const [log, setLog] = useState({ title: "" });
  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((response) =>  response.json())
      .then((responseJSON) =>  setLog(responseJSON))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    fetch(`${API}/logs/${index}`, { method: "DELETE" })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((error) => console.error(error));
  };

  return (

    <div className="singleIndex">
     <h2>{log.title} - Captain {log.captainName}</h2>
    <br />
    <h2>{log.post}</h2>
    <br />
    <h3>Days since last crisis: {log.daysSinceLastCrisis}</h3>

    <div className="Navigation">
        <div>
          {" "}
          <Link to={`/logs`} className="linktag">
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`} className="linktag">
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
         
      </div>
    </div>
  );
}

export default SingleIndex;

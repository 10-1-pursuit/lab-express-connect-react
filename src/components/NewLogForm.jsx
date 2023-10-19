import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewLogForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    mistakesWereMadeToday: false,
    captainName: "",
    title: "",
    post:"",
    daysSinceLastCrisis: 0
  });

  const addLog = () => {
    fetch(`${API}/logs`, {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((error) => console.error("catch", error));
  };
  
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <div className="NewForm">

        <form onSubmit={handleSubmit} className="newForm">
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        
        <label htmlFor="captainName"> Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />

        <label htmlFor="title"> Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />


        <label htmlFor="post"> Post:</label>
        <input
          id="post"
          value={log.post}
          type="text"
          onChange={handleTextChange}
          placeholder="Post"
          required
        />


        <label htmlFor="daysSinceLastCrisis"> Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="0"
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    <br />

      <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
      <br />
    
    </div>
  );
}

export default NewLogForm;

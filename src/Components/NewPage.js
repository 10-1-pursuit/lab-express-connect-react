import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPage() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API;

  const [captainName, setCaptainName] = useState("");
  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);
  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  // New Route
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.post(`${API}/logs`, {
        captainName: captainName,
        title: title,
        post: post,
        daysSinceLastCrisis: daysSinceLastCrisis,
        mistakesWereMadeToday: mistakesWereMadeToday,
      });
      //console.log(result.data);

      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="new">
        <h2>New</h2>
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-input">
            <label>Captain's Name</label>
            <input
              type="text"
              value={captainName}
              onChange={(e) => setCaptainName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Post:</label>
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Days since Last Crisis</label>
            <input
              type="number"
              value={daysSinceLastCrisis}
              onChange={(e) => setDaysSinceLastCrisis(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Mistakes were made today</label>
            <input
              type="checkbox"
              checked={mistakesWereMadeToday}
              onChange={(e) => setMistakesWereMadeToday(e.target.checked)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewPage;

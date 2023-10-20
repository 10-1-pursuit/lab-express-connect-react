import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API;

  const [captainName, setCaptainName] = useState("");
  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);
  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    editLog();
  }, []);

  // Edit Route
  async function editLog() {
    try {
      let result = await axios.get(`${API}/logs/${id}`);
      //console.log(result.data);
      setCaptainName(result.data.captainName);
      setTitle(result.data.title);
      setPost(result.data.post);
      setDaysSinceLastCrisis(result.data.daysSinceLastCrisis);
      setMistakesWereMadeToday(result.data.mistakesWereMadeToday);
    } catch (error) {
      console.log(error);
    }
  }

  // Submit Function
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.put(`${API}/logs/${id}`, {
        captainName: captainName,
        title: title,
        post: post,
        daysSinceLastCrisis: daysSinceLastCrisis,
        mistakesWereMadeToday: mistakesWereMadeToday,
      });

      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="edit">
        <h2>Edit</h2>
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

export default EditPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleLogPage() {
  const [singleLogData, setSingleLogData] = useState(""); // i had it null before that does not work once i changed to empty string it works
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API;

  // Show Route
  useEffect(() => {
    singleLog();
  }, []);

  async function singleLog() {
    try {
      let result = await axios.get(`${API}/logs/${id}`);
      //console.log(result.data);
      setSingleLogData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     //console.log(API);
  //     fetch(`${API}/logs/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setSingleLogData(data))
  //       .catch((error) => console.log(error));
  //   }, []);

  //Handle Back Function
  function handleBackButton() {
    navigate("/logs");
  }

  // Handle Delete Function
  async function handleDeleteButton() {
    try {
      let result = await axios.delete(`${API}/logs/${id}`);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  // Handle Edit Function
  function handleEditButton() {
    navigate("/logs/${id}/edit");
  }

  return (
    <>
      <div className="show">
        <h2>Show</h2>
        <h2>
          {singleLogData.title} - By {singleLogData.captainName}
        </h2>
        <p>{singleLogData.post}</p>
        <p>Days since last crisis: {singleLogData.daysSinceLastCrisis}</p>
      </div>
      <div>
        <button onClick={handleBackButton}>Back</button>
        <button onClick={handleEditButton}>Edit</button>
        <button onClick={handleDeleteButton}>Delete</button>
      </div>
    </>
  );
}

export default SingleLogPage;

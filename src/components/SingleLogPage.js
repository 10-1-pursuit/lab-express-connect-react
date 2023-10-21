
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import React from "react";
import axios from "axios";

function SingleLogPage() {
  const [indexPage, setIndexPage] = useState("");
  const { index } = useParams();
  const API = process.env.REACT_APP_API;
  const navigate = useNavigate();


    async function fetchLogs() {
    try {
      let result = await axios.get(`${API}/logs/`);
      console.log(result);
      setIndexPage(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onHandleDelete() {
    try {
      let result = await axios.delete(`${API}/logs/${index}`);
      console.log(result);
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLogs();
  }, []);

function onHandle() {
navigate("/logs");

}


function onHandleEdit() {
  navigate(`/logs/${index}/edit`);
}


  // useEffect(() => {
  //   //console.log(API);
  //   fetch(`${API}/logs/${index}`)
  //     .then((res) => res.json())
  //     .then((result) => setIndexPage(result.data))
  //     .catch((error) => console.log(error));
  // }, []);


  return (
    <>
      <div className="show">
        <h2>Show</h2>
        <h2>
          {indexPage.title} By {indexPage.captainName}</h2>
        <p>{indexPage.post}</p>
        <p>{indexPage.daysSinceLastCrisis}</p>
      </div>
      <div>
        <button onClick={onHandle}>
          Back
          </button>
        <button onClick={onHandleEdit}>
        Edit
        </button>
        <button onClick={onHandleDelete}>
        Delete
        </button>
      </div>
    </>
  );
}

export default SingleLogPage;
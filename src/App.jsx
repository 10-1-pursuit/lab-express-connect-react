import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

console.log(API)


function App() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get(`${API}/logs`).then(res => setLogs(res.data)).catch(error => console.log(error))
  }, [])

  return (
    <>
      <div>Hello World</div>;
      <div> {logs.map((log, index) => <div key={index}>{log.captainName}</div>)} </div>

    </>)
}

export default App;

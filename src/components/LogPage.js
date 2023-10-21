

import { useEffect, useState } from "react";

function LogsPage() {
const [logs, setLogs] = useState([""]);
const API = process.env.REACT_APP_API;


  // async function fetchLogs() {
  //   try {
  //     let result = await axios.get(`${API}/logs`);
  //     console.log(result);
  //     setLogs(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchLogs();
  // }, []);

useEffect(() => {
    //console.log(API);
    fetch(`${API}/logs`)
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((error) => console.log(error));
  }, []);
      
  return (
    <div>
      <h2>Index</h2>
      <table>
        <tbody>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
          {logs.map(({captainName, title, id}) => {
            return (
                <tr key={id}>
                  <td>💥</td>
                  <td>{captainName}</td>
                  <td>{title}</td>
              </tr>
            );
          })}
          </tbody>
      </table>
    </div>
  );
}

export default LogsPage;


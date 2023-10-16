import { useEffect, useState } from "react";

function App() {

  
  const [backEndLogs, setBackEndLogs] = useState([{}]);
  
  useEffect(() => {
    
    const API = import.meta.env.VITE_API_URL

    fetch(`${API}/logs`)
      .then((response) => response.json())
      .then((responseJSON) => setBackEndLogs(responseJSON))
      .catch((error) => console.error(error));
  }, [backEndLogs]);

  console.log(backEndLogs);

  return (
    <div>
      { typeof backEndLogs.title === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndLogs.map((log, i) => <p key={i}>{log.title}</p>)
      )}
    </div>
  );
}

export default App;

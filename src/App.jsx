// DEPENDENCIES
//import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import FourOFour from "./Pages/fourOfour";
import LogsPage from "./Pages/LogsPage"
import Show from "./Pages/Show";
import NewLogForm from "./Pages/NewLogForm"
import Edit from "./Pages/EditForm";

//COMPONENTS
import NavBar from "./Components/NavBar"

function App() {

  return (
    <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/logs/new" element={<NewLogForm />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;


// 
  // const [backEndLogs, setBackEndLogs] = useState([]);
  
  // useEffect(() => {
    
  //   const API = import.meta.env.VITE_API_URL

  //   fetch(`${API}/logs`)
  //     .then((response) => response.json())
  //     .then((responseJSON) => setBackEndLogs(responseJSON))
  //     .catch((error) => console.error(error));
  // }, [backEndLogs]);

  // console.log(backEndLogs);

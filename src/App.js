import NavBar from "./components/NavBar";
// import AllLogs from "./components/AllLogs";
import Home from "./Pages/Home";
// import NewLog from "./Pages/NewLog";
import New from "./Pages/NewLog";
// import Index from "./Pages/Index";
import Logs from "./Pages/Logs";
import SingleIndex from "./components/SingleIndex";
import Edit from "./components/Edit";

// import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const apiKey = process.env.REACT_APP_API_URL

function App() {
 return(


<div className="app">
  <Router>
<NavBar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/logs" element={<Logs />} />
<Route path="/logs/new" element={<New />} />
<Route path="/logs/:index" element={<SingleIndex />} />
<Route path="/logs/:index/edit" element={<Edit />} />

</Routes>

</Router>
</div>


 )
}

export default App;

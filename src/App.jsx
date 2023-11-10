import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import LogList from "./components/LogList";
import LogDetail from "./components/LogDetail";
import NewLog from "./components/NewLog";
import EditLog from "./components/EditLog";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<LogList />} />
        <Route path="/logs/new" element={<NewLog />} />
        <Route path="/logs/:index" element={<LogDetail />} />
        <Route path="/logs/:index/edit" element={<EditLog />} />
      </Routes>
    </Router>
  );
}

export default App;

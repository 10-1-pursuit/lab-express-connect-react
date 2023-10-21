

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LogPage from "./components/LogPage";
import SingleLogPage from "./components/SingleLogPage";
import EditPage from "./components/EditPage";
import NewPage from "./components/NewPage";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* index */}
          {/* show */}
          {/* edit */}
          {/* new */}
          <Route path="/logs" element={<LogPage />} /> 
          <Route path="/logs/:index" element={<SingleLogPage />} />
          <Route path="/logs/:index/edit" element={<EditPage />} />
          <Route path="/logs/new" element={<NewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

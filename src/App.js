import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LogsPage from "./Components/LogsPage";
import SingleLogPage from "./Components/SingleLogPage";
import EditPage from "./Components/EditPage";
import NewPage from "./Components/NewPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/logs/:id" element={<SingleLogPage />} />
          <Route path="/logs/:id/edit" element={<EditPage />} />
          <Route path="/logs/new" element={<NewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

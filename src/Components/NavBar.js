import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  // Handle New Log Button
  function handleNewLogButton() {
    navigate("/logs/new");
  }

  // Handle h1 element
  function handleHeaderElement() {
    navigate("/logs");
  }

  return (
    <div className="navbar">
      <h1 onClick={handleHeaderElement}>Captain's Log</h1>
      <button className="newLogButton" onClick={handleNewLogButton}>
        New Log
      </button>
    </div>
  );
}

export default NavBar;

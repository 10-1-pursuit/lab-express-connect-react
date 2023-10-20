import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  // Handle h1 element
  function handleHeaderElement() {
    navigate("/logs");
  }

  // Handle New Log Button
  function handleNewLogButton() {
    navigate("/logs/new");
  }

  return (
    <div>
      <h1 onClick={handleHeaderElement}>Captain's Log</h1>
      <button onClick={handleNewLogButton}>New Log</button>
    </div>
  );
}

export default NavBar;

import React from 'react';
import { useNavigate} from "react-router-dom";




 function NavBar() {
  const navigate = useNavigate();

    function handleClick() {
     navigate("/logs");
    }

    function newLogClick() {
      navigate("/logs/new");
    }

    return (
    <div>
        <h1 onClick={handleClick}>
        Captain's log</h1>
        <button onClick={newLogClick}>
          New Log
         </button>
    </div>
  )
}

export default NavBar;
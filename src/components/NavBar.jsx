import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav>
        <h1>Captains Log</h1>
      <ul>
        <li>
          <Link to="/logs">All Logs</Link>
        </li>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

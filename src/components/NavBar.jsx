import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    // State to track dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        setIsDarkMode(!isDarkMode); // Update state to track dark mode
    };

    return (
        <nav>
            <button id="dark-mode-toggle" onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
            <div>
                <Link to="/logs" className="captLog" >Captain's Log</Link>
            </div>
            <ul>
                <li>
                    <Link to="/logs/new">New Log</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

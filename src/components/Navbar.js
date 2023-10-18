import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/logs">Logs</Link></li>
                <li><Link to="/logs/new">New Log</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
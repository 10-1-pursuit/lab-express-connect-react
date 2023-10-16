import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
        <nav>
            <Link to="/logs">See Logs</Link>
            <Link to="/logs/new">New Log</Link>
        </nav>
        </>
    )
}
import "./NavBar.css"
// import NewLogForm from "../Pages/NewLog";

import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <div className="navBar">
        <Link to={`/`} className="nav"><h1>Captain's Log</h1></Link>
        <br />
`       <Link to={`/logs`}> <button>Recent Logs</button></Link>

        <Link to={`/logs/new`}> <button>New Log </button></Link>
        </div>
        </>
    )
}

export default NavBar
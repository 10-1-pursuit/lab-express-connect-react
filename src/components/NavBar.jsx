import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <>
      <div className="collapse bg-dark" id="navbarToggleExternalContent">
        <div className="p-4">

          <Link className="text-light h4" to={"/logs"}>
            <button className="btn btn-info"> 🏴‍☠️All Captains🏴‍☠️ </button>
          </Link>
          <Link className="text-secondary" to={"/logs/new"}>
            <button className="btn btn-success"> 1️⃣ New Log</button>
          </Link>{" "}
   
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="#navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

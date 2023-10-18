import { Link } from "react-router-dom"


export default function NavBar() {
    return (
      <>
        <header className="navHeader"></header>
        <nav className="navBar">
          <Link to="/logs" className="homeLink">
            Home
          </Link>
          <Link to="/form" className="formLink">
            Form
          </Link>
          <Link to="/index" className="indexLink">
            Index
          </Link>
        </nav>
      </>
    );
  }
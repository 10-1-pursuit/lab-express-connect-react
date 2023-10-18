import { Link } from "react-router-dom"


export default function NavBar() {
  return (
      <header className="navHeader">
        <nav className="navBar">
          <Link to="/logs" className="LogsLink">
            Home
          </Link>
          <Link to="/logs/new" className="formLink">
            Form
          </Link>
        </nav>
      </header>
  );
}
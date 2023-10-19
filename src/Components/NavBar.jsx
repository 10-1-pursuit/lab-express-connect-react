import { Link } from "react-router-dom"
import pic from "/Users/xavierrice/Desktop/module4/Express/CaptainsFolder/lab-express-connect-react/src/Pictures/captainsPics.jpeg"
import "./NavBar.css"


const NavBar = () => {
  return (
    <div className="desktop-1">
      <div className="frame">
        <img className="frame-child" alt="" src={pic} />
      </div>
      <div className="captains-log">Captain’s Log</div>
      <div className="component-parent">
        <div className="frame-wrapper">
          <div className="home-parent">
          <Link to="/" className="LogsLink">
            <a className="home">Home</a>
            </Link>
            <Link to="/logs" className="LogsLink">
            <a className="index1">Index</a>
            </Link>
            <Link to="/logs/new" className="LogsLink">
            <a className="form">{`Form `}</a>
            </Link>
            <a className="about-me" href="https://github.com/XavierRice">
              About Me
            </a>
          </div>
        </div>
        <div className="frame-container">
          <div className="frame1">
            <div className="star-trek-experience">Star Trek Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


// export default function NavBar() {
//   return (
//     <header className="navHeader">
//       <nav className="navBar">
//         <Link to="/logs" className="LogsLink">
//           Home
//         </Link>
//         <Link to="/logs/new" className="formLink">
//           Form
//         </Link>
//       </nav>
//     </header>
//   );
// }


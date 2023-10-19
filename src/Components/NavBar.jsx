import { Link } from "react-router-dom"
import "./NavBar.css"
//import "./header-nav.css";

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


// const HeaderNav = () => {
//   return (
//     <div className="headernav">
//       <img className="headernav-child" alt="" src="/rectangle-1@2x.png" />
//       <a className="links">
//         <a className="home-wrapper">
//           <div className="home">home</div>
//         </a>
//         <a className="home-wrapper">
//           <Link to="/logs" className="LogsLink">
//             <div className="home">index</div>
//           </Link>
//         </a>
//         <a className="home-wrapper">
//         <Link to="/logs/new" className="formLink">
//           <div className="home">{`form `}</div>
//           </Link>
//         </a>
//         <a
//           className="home-wrapper"
//           href="https://github.com/XavierRice"
//           target="_blank"
//         >
//           <div className="home">about</div>
//         </a>
//       </a>
//       <div className="title">
//         <div className="app-name">
//           <div className="captains-log-book"> Captain’s Log Book</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderNav;


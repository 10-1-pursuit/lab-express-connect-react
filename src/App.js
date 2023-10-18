import react from "react";
import Navbar from "./components/Navbar.js";
import AppRoutes from "./AppRoutes.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App;

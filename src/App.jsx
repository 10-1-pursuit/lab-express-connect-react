import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  // const API = import.meta.env.VITE_REACT_VAR;
  
  return(
    <>
     <div className="app" style={{fontSize: '173px'}}> <b>Hello World</b></div>
     <Router>
      <NavBar></NavBar>
      <Routes>
        <Route />
      </Routes>
     </Router>
     </>
     );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import NavBar from './components/NavBar';
// import LogsList from './components/LogsList';
// import LogDetail from './components/LogDetail';
// import NewLog from './components/NewLog';
// import EditLog from './components/EditLog';



const App = () =>{

// State to track dark mode
const [isDarkMode, setIsDarkMode] = useState(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  setIsDarkMode(!isDarkMode); // Update state to track dark mode
};


  return (
    <Router>
 <button id="dark-mode-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>      <div>
      <h2>Hello, world!</h2>
    </div>
      <NavBar />
      <Routes>
        {/* <Route path="/logs" exact component={LogsList} />
        <Route path="/logs/new" exact component={NewLog} />
        <Route path="/logs/:index" exact component={LogDetail} />
        <Route path="/logs/:index/edit" exact component={EditLog} /> */}
      </Routes>
    </Router>
  );
}

export default App;

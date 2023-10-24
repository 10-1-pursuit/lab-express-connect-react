import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LogsIndex from './components/LogsList';
// import LogDetail from './components/LogDetail';
// import NewLog from './components/NewLog';
// import EditLog from './components/EditLog';



const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogsIndex />} />
        <Route path="/logs" element={<LogsIndex />} />
        {/* <Route path="/logs/new" exact component={NewLog} />
        <Route path="/logs/:index" exact component={LogDetail} />
        <Route path="/logs/:index/edit" exact component={EditLog} /> */}
      </Routes>
      <div>
        <h2>(Pretty cool huh)</h2>
      </div>
    </Router>
  );
}

export default App;

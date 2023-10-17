import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LogsIndex from './components/LogsIndex';
import LogShow from './components/LogShow';
import NewLogEntry from './components/NewLogEntry';
import EditLogEntry from './components/EditLogEntry';

function App() {
  return (
    <>
    <div className="app">
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LogsIndex />} />
<Route path="/logs" element={<LogsIndex />} />
<Route path="/logs/new" element={<NewLogEntry />} /> 
<Route path="/logs/:id" element={<LogShow />} />
<Route path="/logs/:id/edit" element={<EditLogEntry />} />




    </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;

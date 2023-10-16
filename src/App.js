import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LogsIndex from './components/LogsIndex';
import LogShow from './components/LogShow';

function App() {
  return (
    <>
    <div className="app">
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LogsIndex />} />
<Route path="/logs" element={<LogsIndex />} />
<Route path="/logs/:id" element={<LogShow />} />



    </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;

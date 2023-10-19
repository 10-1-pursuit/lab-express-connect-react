import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogsIndex from "./components/LogsIndex";
import LogShow from "./components/LogShow";
import NewLogEntry from "./components/NewLogEntry";
import EditLogEntry from "./components/EditLogEntry";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Stars from "./components/Stars/Stars";
import './app.css'
// import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar
          className="d-flex justify-content-between"
          bg="dark"
          variant="dark"
        >
          <Nav>
            <Nav.Link href="/logs">Logs</Nav.Link>
          </Nav>
          <Navbar.Brand>Captain's Log</Navbar.Brand>
          <Nav>
            <Nav.Link href="/logs/new">New Log</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <div className="content">
            <Routes>
              <Route path="/" element={<LogsIndex />} />
              <Route path="/logs" element={<LogsIndex />} />
              <Route path="/logs/new" element={<NewLogEntry />} />
              <Route path="/logs/:id" element={<LogShow />} />
              <Route path="/logs/:id/edit" element={<EditLogEntry />} />
            </Routes>
            <div>
          <Stars />
        </div>
          </div>
        </Container>
        <footer>{/* Footer */}</footer>
      </div>
    </Router>
  );
}
export default App;

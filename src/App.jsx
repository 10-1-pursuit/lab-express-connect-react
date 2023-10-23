import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOhFour from "./Pages/FourOhFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/log/:id" element={<Show />} />
            <Route path="/log/:id/edit" element={<Show />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

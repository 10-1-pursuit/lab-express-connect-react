import React from "react";
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router,Routes,Route,  } from "react-router-dom";
import Header from "./Components/Header";
import ShowTitles from "./Components/ShowTitles";
import CaptainCard from "./Components/CaptainCard";
import NewCard from "./Components/NewCard";





function App() {

  // const {index}=useParams()
 return (
       <>
<Router>
    <Header/>
       
    <Routes>
      <Route path="/logs" element={<ShowTitles/>}/>
      <Route path="/logs/:index" element ={<CaptainCard/>}/>
      <Route path="logs/new" element={<NewCard/>}/>




    </Routes>
 </Router>
 </>

  
 )
  ;
}

export default App;

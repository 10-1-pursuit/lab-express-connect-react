import React from "react";
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router,Routes,Route, useParams } from "react-router-dom";
import Header from "./Components/Header";
import ShowTitles from "./Components/ShowTitles";
import CaptainCard from "./Components/CaptainCard";
// import { useParams } from 'react-router-dom';




function App() {

  const {index}=useParams()
 return (
       <>
<Router>
    <Header/>
       
    <Routes>
      <Route path="/logs" element={<ShowTitles/>}/>
      <Route path="/logs/:index" element ={<CaptainCard/>}/>




    </Routes>
 </Router>
 </>

  
 )
  ;
}

export default App;

import React, { useState ,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import LogList from "./LogList"
import LogDetail from "./LogDetail";
import LogForm from "./LogForm";


function App (){
return (
  <Router>
  <div className="App">
    <NavBar/>
    <Switch>
      <Route path="/" exact component={LogList} />
      < Route path="/logs/new" component={LogForm}/>
      <Route patha ="/logs/:id" component={LogDetail}/>
    </Switch>
  </div>
  </Router>
  );
}
      export default App;
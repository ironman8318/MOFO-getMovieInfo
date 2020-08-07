import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import FullMovie from "./containers/FullMovie/FullMovie";
import {Route,Switch} from "react-router-dom";

function App() {
    const router = (
        <Switch>
            <Route path="/" exact component ={Home} />
            <Route path="/movie/:id" component={FullMovie} />  
        </Switch>
    )
  return (
      
    <div className="App">
        {router}
    </div>
  );
}

export default App;

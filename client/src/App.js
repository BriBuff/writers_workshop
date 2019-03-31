import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Page from "./components/Page";
import Register from "./components/register";
var axios = require("axios");






class App extends Component {

 


  render() {
    return (
      
      <Router>
      <div className="App">
        <Switch>
          <Route exact path= "/" component={Login} />
          <Route exact path="/dashboard" render={()=><Middle name={this.state.name} password={this.state.password}  projects={this.state.projects}  />}  />
          <Route exact path="/pages" render={()=><Page />} /> 
          <Route exact path="/register" render={()=><Register />} />
        </Switch>
        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;

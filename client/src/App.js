import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Page from "./components/Page";
import Create from "./components/Create";
import Register from "./components/register";




class App extends Component {

  render() {
    return (
      
      <Router>
      <div className="App">
        <Switch>
          <Route exact path= "/" component={Login} />
          <Route exact path="/dashboard" component={Middle }    />
          <Route exact path="/pages"component={Page } /> 
          <Route exact path="/register" component={Register}  />
          <Route exact path="/create" component={Create}  />
        </Switch>
        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Page from "./components/Page";
import Write from "./components/Write";





class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Header click={this.clickMe} />
        <Switch>
          <Route exact path= "/" component={Login} />
          <Route exact path="/dashboard" component={Middle} /> 
          <Route path="/pages" component={Page} />
          <Route path="/pages" component={Write} />
        </Switch>
        {/* <Middle /> render either Middle component or Page component */}
        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;

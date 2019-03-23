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
var axios = require("axios");





class App extends Component {

    state={
      name: "Jessica",
      password: ""
    }
  
    userLogin = (name) => {
      axios.get("/dashboard/" + name)
      .then(res => this.setState(
        {name: res.name },
        {password: res.password}))
      .catch(err => console.log(err));
    }
  
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Header click={this.clickMe} />
        <Switch>
          <Route exact path= "/" component={Login} login={this.userLogin}/>
          <Route exact path="/dashboard" component={Middle} name={this.state.name}/> 
          <Route path="/pages" component={Page} />
          <Route path="/pages" component={Write} />
        </Switch>
        
        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;

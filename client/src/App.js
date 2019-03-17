import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Footer from "./components/Footer";



class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Nav />
        <Results />

        
        <Footer />
      </div>
    );
  }
}

export default App;

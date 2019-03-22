import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";





class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Middle />
        {/* <Middle /> render either Middle component or Page component */}
        <Footer />
        
      </div>
    );
  }
}

export default App;

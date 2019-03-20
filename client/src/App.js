import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";





class App extends Component {
  
clickMe = () =>{
  console.log("clicked");
}
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Header click={this.clickMe} />
        <Middle />
        {/* <Middle /> render either Middle component or Page component */}
        <Footer />
        
      </div>
    );
  }
}

export default App;

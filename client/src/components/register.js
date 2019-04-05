import React, { Component } from "react";
import "./Login.css"
import Login from "./Login";
const axios = require("axios");


class Register extends Component {
  state={
    readyForLogIn: false,
    name: "",
    password: ""
  }

  name = (event) => {
    this.setState({ name: event.target.value})
    console.log(event.target.value);
  }

  password = (event) => {
    this.setState({ password: event.target.value})
    console.log(event.target.value);
  }

    addUser =(event)=>{
      event.preventDefault();
      const input = document.querySelectorAll("input");
    axios.post("/register",{name:input[0].value, password: input[1].value})
    // .then(res=> console.log(res))
    .then(this.setState({readyForLogIn: !this.state.readyForLogIn}))
    .catch(err=>console.log(err));
  }
    render(){
      const enabled = this.state.name.length > 3 && this.state.password.length > 3;

      if(this.state.readyForLogIn===true){
        return <Login/>
      }
   
      return(

        <section id="main">
          <nav className="navbar navbar-default ">
        <div className="container">
          <div className="navbar-header">
            {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button> */}
           <div className ="heading"  aria-hidden="true">Writer's Workshop</div> 
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              </ul>
            
          </div>
        </div>
      </nav>
        <div className="container">
      
            <div className="row">
                
                <div className="col-md-4 col-md-offset-4">
                <h3>Register Here</h3>
                  <form id="register" method="POST" className="well"onSubmit={(event)=> (this.addUser(event))} >
                  
                    <div className="form-group">
                      <label>Create Username</label>
                      <input type="text" name="name" className="form-control" placeholder="Enter Username" onChange={(event) => this.name(event)}></input>
                    </div>
                    <div className="form-group">
                        <label>Create Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={(event) => this.password(event)}></input>
                        <br />
                      </div>
                      <button  disabled={!enabled} type="submit" className="btn btn-default btn-block">Add User</button>
                  </form>
                              
                </div>
            </div>
        </div>
        <div style={{height: "200px"}}></div>
    </section>
    
    );
  }

}




export default Register;
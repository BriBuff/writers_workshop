import React, { Component } from "react";
// import Login from "./Login";
const axios = require("axios");


class Register extends Component {
  // state={
  //   readyForLogIn: false
  // }

    addUser =()=>{

    axios.post("/register")
    .then(res=> console.log(res))
    // .then(this.setState({readyForLogIn: !this.state.readyForLogIn}))
    .catch(err=>console.log(err));
  }
    render(){

      // if(this.state.readyForLogIn===true){
      //   return <Login/>
      // }
   
      return(

        <section id="main">
          <nav className="navbar navbar-default ">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
           <div className ="active"  aria-hidden="true">Writer's Workshop</div> 
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
                  <form id="register" method="POST" className="well" >
                  
                    <div className="form-group">
                      <label>Create Username</label>
                      <input type="text" name="name" className="form-control" placeholder="Enter Username"></input>
                    </div>
                    <div className="form-group">
                        <label>Create Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password"></input>
                        <br />
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Check Password"></input>
                      </div>
                      <button onClick={this.addUser} type="submit" className="btn btn-default btn-block">Add User</button>
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
import React from "react";
import Middle from "./Middle";
import { BrowserRouter as Router, Route } from "react-router-dom";
var axios = require("axios");



class Login extends React.Component{

  state={
    name: "",
    password: "",
    
    projects: [],
    isUser: false

  };

  handlePasswordChange = event =>{
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleNameChange = event =>{
    event.preventDefault();
    this.setState({name: event.target.value});
  }
  
  findUser = () =>{
    

    axios.get("/login").then(res=>{

      

        const projArray = [];

      for(var i = 0; i < res.data.length; i++){

        if(this.state.password !== res.data[i].password || this.state.name !== res.data[i].name  ){
          continue;

        } else {
         
          projArray.push(res.data[i].projects[0])
          console.log("this data; " + JSON.stringify(res.data[i].projects[0]) )
        }
      } 
          this.setState({projects: projArray, isUser: true});
          console.log("state projects: " + JSON.stringify(this.state.projects));
         

    }).catch(err=>console.log(err))

  }

  renderMiddle = () => { 
    return(
    <Router>
      
     {this.state.isUser ? 
    <Route exact path="/dashboard" render={()=><Middle name={this.state.name} password={this.state.password}  projects={this.state.projects} />} /> :
     <Route exact path= "/" component={Login} /> }

    </Router>
    )
    
  }



  render(){
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
                <form id="login" action="index.html" className="well" onSubmit={(event)=>event.preventDefault()}>
                
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="loginName" 
                    className="form-control" 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    
                    ></input>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input 
                      type="password" 
                      className="form-control"  
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      ></input>
                    </div>
                    <button onClick={this.findUser} type="submit" className="btn btn-default btn-block">Login</button>

                    
                    {this.renderMiddle()}
                </form>
                            
              </div>
          </div>
      </div>
      <div style={{height: "200px"}}></div>
  </section>
  
  );
  }
}


export default Login;
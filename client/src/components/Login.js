import React from "react";
import Middle from "./Middle";

const axios = require("axios");




class Login extends React.Component{

  state={
    name: "",
    password: "",
    userID: "",
    projects: [],
    isUser: false

  }

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
       

        if(this.state.password !== res.data[i].password 
          || this.state.name !== res.data[i].name){
          
          

        } else if(this.state.password === res.data[i].password 
          && this.state.name === res.data[i].name) {
          this.setState({isUser: true, userID: res.data[i]._id});

          if(res.data[i].projects){

            projArray.push(res.data[i].projects);
            this.setState({projects: projArray});
          }
        }
      } 
          
          if(this.state.isUser){
            console.log("this is a user");
          } else {
            console.log("this is not a user");
          }
         

    }).catch(err=>console.log(err))

  }

 



  render(){
    
    if(this.state.isUser === true){
      return  <Middle projects={this.state.projects}  name={this.state.name} userID={this.state.userID}  /> 
    }
   

    return(

      <section id="main">
        <nav className="navbar navbar-default ">c
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
                <form id="login"  className="well" onSubmit={(event)=>event.preventDefault()}>
                
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

                    <button  type="submit" className="btn btn-default btn-block"> <a href="/register" >Register Here</a></button>

                    
                    


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
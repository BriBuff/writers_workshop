import React from "react";
import Middle from "./Middle";

const axios = require("axios");




class Login extends React.Component{

  state={
    name: "",
    password: "",
    
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
    
    console.log("state pass: " + this.state.password);
    console.log("state name: " + this.state.name);
    console.log("state isUser: " + this.state.isUser);

    axios.get("/login").then(res=>{
      
        const projArray = [];

      for(var i = 0; i < res.data.length; i++){
        // console.log("res pass: " + res.data[i].password);
        // console.log("res name: " + res.data[i].name);
        console.log("res : " + JSON.stringify(res.data[i]));

        if(this.state.password !== res.data[i].password 
          || this.state.name !== res.data[i].name){
          console.log("No user" + res.data[i].name);
          

        } else if(this.state.password === res.data[i].password 
          && this.state.name === res.data[i].name) {

            

          console.log("got in past name and password: " );
          this.setState({isUser: true});

          console.log("projects before set state: "+ this.state.projects);

          console.log(res.data[i].projects);

          if(res.data[i].projects){

            console.log("push projects into array if projects exist");
            projArray.push(res.data[i].projects);

            
            this.setState({projects: projArray});
          }

        }

      } 
          
        
         console.log("projects after state: "+ JSON.stringify(this.state.projects));
         console.log("isUser after set state: " + this.state.isUser);
        

          if(this.state.isUser){
            console.log("we got a user");
            // this.renderMiddle();
          } else {
            console.log("we don't have a user");
            // this.renderMiddle();
            
          }
         

    }).catch(err=>console.log(err))

  }

  // renderMiddle = () => { 

  //   if(this.state.isUser){
  //     console.log("render middle");
  //     return <Middle  />;
  //   } else {
  //     console.log("render login");
  //     return <Login />;
  //   }
  // };



  render(){
    if(this.state.isUser === true){
      return <Middle name={this.state.name} projects={this.state.projects}  />
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
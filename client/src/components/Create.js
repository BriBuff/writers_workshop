import React, { Component } from "react";
const axios = require("axios");


class Create extends Component{

    state={
        title: "",
        body: "",
        userID: ""
        
    }
    componentDidMount(){
        this.setState({userID: this.props.userID});
      }
    

    saveProject =(event)=>{
      
      event.preventDefault();
      const input = document.querySelectorAll("input");
      console.log(event.target.childNodes);
      console.log(input[0].value);
      const input1 = input[0].value;
      const input2 = input[1].value;
      
        axios.post("/create/"+ this.state.userID,{title: input1, body: input2}).then(res=> console.log(res)).catch(err=>console.log(err));
      }

    render(){
        
        
    
        return(
    
          <section id="main">
            <nav style={{marginBottom: 25,paddingBotton: 5}} className="navbar navbar-default ">c
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
            
          </div>
        </nav>
          <div className="container">
        
              <div className="row">
                  
                  <div className="col-md-4 col-md-offset-4">
                  <form id="create" method="POST" className="well" onSubmit={(event)=> (this.saveProject(event))}>
                    
                      <div className="form-group">
                      
                        <label>Title of Project</label>
                        <input 
                        type="text" 
                        name="title" 
                        className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                          <label>Body of Project</label>
                          <input 
                          style={{height: 300}}
                          type="text" 
                          name="body"
                          className="form-control"  
                          
                        
                          ></input>
                        </div>
                        <button  type="submit" className="btn btn-secondary btn-block">Create Project</button>
    
    
                    </form>
                                
                  </div>
              </div>
          </div>
          <div style={{height: "200px"}}></div>
      </section>
      
      );
      }

}

export default Create;
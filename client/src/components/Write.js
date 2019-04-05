import React, { Component } from "react";
const axios = require("axios");


class Write extends Component{
  state={
    title: "",
    body: "",
    projectId: ""

  }
  componentDidMount(){
    this.setState({title: this.props.title, body: this.props.body, projectId: this.props.projectId});
  }
 
  handleTitleChange = event =>{
    event.preventDefault();
    this.setState({title: event.target.value});
    
  }

  handleBodyChange = event =>{
    event.preventDefault();
    this.setState({body: event.target.value});
    
  }
  updateProject =(event)=>{
      
    event.preventDefault();
    const input = document.querySelectorAll("input");
    console.log(event.target.childNodes);
    console.log(input[0].value);
    const input1 = input[0].value;
    const input2 = input[1].value;
    
      axios.post("/update/"+ this.state.projectId,{title: input1, body: input2}).then(res=> 
    console.log(res)).catch(err=>console.log(err));
    }
  

 

  render(){
    return(
      <section className="write">
      <h1>Write</h1>
      <form id="create" method="POST" className="well" onSubmit={(event)=> (this.updateProject(event))}>
                    
                      <div className="form-group">
                      
                        <label>Title of Project</label>
                        <input 
                        type="text" 
                        name="title" 
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        ></input>
                      </div>
                      <div className="form-group">
                          <label>Body of Project</label>
                          <input 
                          style={{height: 300}}
                          type="text" 
                          name="body"
                          className="form-control"  
                          value={this.state.body}
                          onChange={this.handleBodyChange}
                        
                          ></input>
                        </div>
                        <button  type="submit" className="btn btn-secondary btn-block">Update Project</button>
                        
    
    
                    </form>
      
  
    
    </section>
  );
  }
  

}

export default Write;
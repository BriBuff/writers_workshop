import React, { Component } from "react";


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

  saveFunction =()=>{

  }


  render(){
    return(
      <section className="write">
      <h1>Write</h1>
      
      
  
    <form action="/pages/" method="POST">

    <button 
    type="submit"
    onClick={this.state.saveFunction} 
    projectId={this.state.projectId}
    style={{marginBottom:"5px"}}>SAVE</button>

      <div id="form-group">
        <label style={{width:600}}>Title: </label>
        <input 
        className="form-control"
        name="title" 
        type="text" 
        value={this.state.title}
        onchange={this.handleTitleChange}>
        </input>
      
      </div>
      <div id="form-group">
        <label>Body: </label>
        <textarea 
        className="form-control" 
        name="body" 
        style={{ width: 600, height: 300}} 
        value = {this.state.body} 
        onchange={this.handleBodyChange}></textarea>
      
      </div>
      
      
      
    </form>
    </section>
  );
  }
  

}

export default Write;
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Page from "./Page";
import Create from "./Create";

const axios = require("axios");


class Middle extends React.Component{

  state={
    isPageClicked: false,
    title: "",
    projectId: "",
    body: "",
    isCreateClicked: false,
    userID: this.props.userID,
    projects: [],
    name: "",
    
   
  }

  componentDidMount(){
    
    this.loadUsers();
  }

  

  loadUsers = () => {
    axios.get("/login/"+this.props.userID)

    .then(res => this.setState({projects: res.data[0].projects})
    )
    .catch(err => console.log(err));
  }

  deleteProject = (id) =>{
    console.log(id);
    const input = document.querySelectorAll("input");
    console.log(input);
      axios.delete("/delete/" + id).then(res=> this.loadUsers()).catch(err=>console.log(err));

  }

    render(){
      
      console.log("down here: " + JSON.stringify(this.state.projects));
      if(this.state.isPageClicked === true){
        
      return <Page title={this.state.title} body={this.state.body} loadUsers={this.loadUsers}userID={this.state.userID}projectId={this.state.projectId} />
      } 
      if(this.state.isCreateClicked === true){
        return <Create userID={this.state.userID}/>
      }
      
      
        return(

          
            <section className="main">
            <Nav/>
            <Header/>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-3">
                    
                    <button style={{marginRight: 10}} onClick={()=>{this.setState({isCreateClicked: !this.state.isCreateClicked})}}>Create New Project</button><a href="/">Back Home</a>
                          
                    </div>
                    
                    <div className="col-md-9">
                           
                                  <div className="panel panel-default">
                                        <div className="panel-heading">
                                          <h3 className="panel-title">Latest Work for {this.state.name}</h3>
                                        </div>
                                        <div className="panel-body">
                                          <table className="table table-striped table-hover">
                                          <tbody>
                                            <tr>
                                                  <th>Project Name</th>
                                                  <th>Body</th>
                                                  <th></th>
                                              </tr>
                                                  
                                                 
                                             { this.state.projects && this.state.projects.length &&
                                                   this.state.projects.map(proj=>{
                                                     
                                                  
                                                 return (
                                                  <tr>
                                                  <td>{proj.title}</td>
                                                  <td>{proj.body}</td>
                                                  <td>
                                                  
                                                  
                                                  <button data-id={proj._id} 
                                                  onClick={()=> this.setState({isPageClicked: true, projectId: proj._id, title: proj.title, body: proj.body})}>Edit</button>

                                                  <button onClick={()=>this.deleteProject(proj._id)} style={{marginTop: 5}}data-id={proj._id} 
                                                  >Delete</button>
                                                  </td>
                                                  </tr>
                                                 )
      
                                            } )}
                                              
      
                                          </tbody>
                                             
                                          </table>
                                        </div>
                                      </div>
                    </div>
                </div>
            </div>
            
            
        </section>
        );
    }
}

export default Middle;
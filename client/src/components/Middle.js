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
    userID: "",
    projects: [],
    name: "",
    
   
  }

  componentWillMount(){
    console.log(this.props);
    this.setUser();
  }

  setUser= ()=>{
    
    const newArr = [];
    newArr.push(this.props.projects);
    
    this.setState({userID: this.props.userID, name: this.props.name, projects: newArr});
  }



  deleteProject = (id) =>{
    console.log(id);
    const input = document.querySelectorAll("input");
    console.log(input);
      axios.delete("/delete/" + id).then(res=> console.log(res)).catch(err=>console.log(err));

  }

    render(){
      
      
      if(this.state.isPageClicked === true){
        
      return <Page title={this.state.title} body={this.state.body} projectId={this.state.projectId} />
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
                            
                    <button onClick={()=>{this.setState({isCreateClicked: !this.state.isCreateClicked})}}>Create New Project</button>
                          
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
                                                  
                                                 { this.props.projects[0] && this.props.projects[0].length &&
                                                   this.props.projects[0].map(proj=>{
                                                     
                                                  
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
            <div style={{height: "400px"}}></div>
        </section>
        );
    }
}

export default Middle;
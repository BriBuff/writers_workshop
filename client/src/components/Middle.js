import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Page from "./Page";


class Middle extends React.Component{

  state={
    isClicked: false,
    title: "",
    id: "",
    body: ""
   
  }

  





    render(){
      if(this.state.isClicked === true){
      return <Page title={this.state.title} body={this.state.body} id={this.state.id} />
      }
      
        return(

          
            <section className="main">
            <Nav/>
            <Header/>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-3">
                            
                           <div>image or middle sec</div>
                          
                    </div>
                    <div className="col-md-9">
                           
                                  <div className="panel panel-default">
                                        <div className="panel-heading">
                                          <h3 className="panel-title">Latest Work for {this.props.name}</h3>
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
                                                  
                                                  {/* <button><a href={"/pages/" + proj._id}>Edit</a></button> */}
                                                  <button data-id={proj._id} onClick={()=> this.setState({isClicked: !this.state.isClicked, id: proj._id, title: proj.title, body: proj.body})}>Edit</button>
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
import React from "react";
import Nav from "./Nav";
import Header from "./Header";


class Middle extends React.Component{




    render(){

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
                                              
                                               {this.props.projects.map(proj=>{
                                                 return (

                                                  <tr>
                                                  <td>{proj.title}</td>
                                                  <td>{proj.body}</td>
                                                  <td>
                                                  
                                                  <button><a href={"/pages/" + proj.id}>Edit</a></button>
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
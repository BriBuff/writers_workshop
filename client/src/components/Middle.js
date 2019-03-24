import React from "react";
<<<<<<< HEAD
// import axios from "axios";
=======

>>>>>>> 98777c3094f8f41faef24cb526ce3a586fd39770
import Nav from "./Nav";
import Header from "./Header";


class Middle extends React.Component{

    state = {
        title: "Kate",
        project: "kate's project",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
        updated: "March 1, 2019"
    }
    

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
                                                  <th>Last Updated</th>
                                                  
                                              </tr>
                                              <tr>
                                                  <td>Jill's project</td>
                                                  <td>body body body body body body body body body body body body body body body</td>
                                                  <td>Dec 30, 2018</td>
                                                  
                                              </tr>

                                              <tr>
                                                  <td>{this.state.title}</td>
                                                  <td>{this.state.body}</td>
                                                  <td>{this.state.updated}</td>
                                                  
                                              </tr>
      
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
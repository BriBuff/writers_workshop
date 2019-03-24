import React from "react";
// import axios from "axios";
import Nav from "./Nav";
import Header from "./Header";


class Middle extends React.Component{

    state = {
        title: "Kate",
        project: "kate's project",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
        updated: "March 1, 2019"
    }
    // componentDidMount() {
    //     this.loadUser();
    //   }
    
    //   loadUser = () => {
    //     axios.get("/dashboard/" + this.state.name)
    //       .then(res => this.setState(
    //           { name: res.name }, 
    //           {project: res.project_title},
    //           {body: res.body},
    //           {upated: res.updated}
    //           )).catch(err => console.log(err));
    //   };

    render(){
        return(
            <section className="main">
            <div className="container">
                 <Nav/>
                 <Header/>
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
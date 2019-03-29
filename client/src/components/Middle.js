import React from "react";
import Nav from "./Nav";
import Header from "./Header";
var axios = require("axios");


class Middle extends React.Component{



  state={
    name: "",
    password: "",
    projects: []

  }

    
componentDidMount()
{

  
  axios.get("/dashboard")
  .then(res => {
    let projArray = [];
    
    res.data[0].projects.forEach((p)=>{
      
      let proj = {};
      proj.title = p.title;
      proj.body = p.body;
      proj.id = p._id;
      projArray.push(proj);
    });
    
    

    this.setState(
        {name: res.data[0].name, password: res.data[0].password, projects: projArray }
        );

  })
  // .then(res =>console.log(JSON.stringify(res.data[0].projects)))
 .catch(err => console.log(err))
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
                                              
                                               {this.state.projects.map(proj =>
                                                   
                                                    <tr>

                                                    <td>{proj.title}</td>
                                                    <td>{proj.body}</td>
                                                    <td>
                                                    
                                                    <button><a href={"/pages/" + proj.id}>Edit</a></button>
                                                    </td>
                                                    
                                                    </tr>
                
                                               )} 
                                              
      
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
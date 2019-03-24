import React from "react";
import { Link, Route } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Write from "./Write";

function Page(props){
    return(
    
        
        <section className="main">
            <div className="container">
            <Nav/>
            <Header/>
            <div className="row">
            <div className="col-md-3">
                <div className="list-group">
                <span className="list-group-item active main-color-bg">Dashboard</span>
                <span className="glyphicon glyphicon-list" aria-hidden="true"></span>  Pages <span className="badge">12</span>
                </div>
            
            </div>
            <div className="col-md-9">
            
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Pages</h3>
                    </div>
                    <div className="panel-body">
                    <div className="row">
                    <div className="col-md-12">
                    <input className="form-control" type="text" placeholder="Filter pages...."></input> 
                    </div>
                    <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Published</th>
                            <th>Published</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                            <td>Dec 12, 2018</td>
                            <td><Link to={`${props.match.url}/write`} role="button" className="btn btn-default">
                                        Create
                                </Link>{" "}
                                <Link to="/pages" role="button" className="btn btn-danger">
        Delete
      </Link>
                                <Route exact path={`${props.match.url}/write`} component={Write} />
                                </td>
                            
                        </tr>
                    
                    </tbody>
                    </table>
                    <container>
                    
                    </container>
                   
                   
                   
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default Page;
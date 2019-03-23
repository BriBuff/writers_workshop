import React from "react";

function Page(){
    return(

        <section className="main">
            <div className="container">
            <div className="row">
            <div className="col-md-3">
                <div className="list-group">
                <a href="#" className="list-group-item active main-color-bg">Dashboard</a>
                <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list" aria-hidden="true"></span>  Pages <span className="badge">12</span></a>
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
                            <td><a className="btn btn-default" href="edit.html">Edit</a><a className = "btn btn-danger" href="#">Delete</a></td>
                        </tr>
                        </tbody>
                    
                    </table>
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
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Write from "./Write";

function Page(){
    return(
    
        
        <section className="main">
        <Nav/>
            <Header/>
            <div className="row">
            <div className="col-md-2">
                <div className="list-group">
                <span className="list-group-item active main-color-bg">Dashboard</span>
                <span className="glyphicon glyphicon-list" aria-hidden="true"></span>  Pages <span className="badge">12</span>
                </div>
                </div>
                </div>
            <div className="container">
            <div className="row">
            <div className="col-md-6">
                <Write/>
            </div>
            </div>
            </div>
            <div style={{height: "400px"}}></div>
        </section>
    );
}

export default Page;
import React from "react";
import {Link} from "react-router-dom"


function Nav (){
    return(
        <nav className="navbar navbar-default ">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className={window.location.pathname === "/" ?"active" :"nav-link"}> Writer's Workshop
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            <li>
              <Link to ="/dashboard" className={window.location.pathname === "/dashboard" ?"active" : "nav-link"}>Dashboard
              </Link>  
            </li>
              <li>
                <Link to ="/pages" className={window.location.pathname === "/pages" ?"active" : "nav-link"}>Pages
                </Link>
                </li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
                   
                  <li><a href={"/"}>Logout</a></li>
                  
                </ul>
          </div>
        </div>
      </nav>
    );
}




export default Nav;
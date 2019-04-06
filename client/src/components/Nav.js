import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";


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
            <Link to="/" className="heading"> Writer's Workshop
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                  <li><a href="/" className="active nav-link">Logout</a></li>
                  
                </ul>
          </div>
        </div>
      </nav>
    );
}




export default Nav;
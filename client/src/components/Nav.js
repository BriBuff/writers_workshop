import React from "react";


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
            <a className="navbar-brand" href="https://github.com">Writer's Workshop</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="https://github.com">Dashboard</a></li>  
              <li><a href="https://github.com">Pages</a></li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
                  <li><a href="https://github.com">Welcome, Kate</a></li>  
                  <li><a href="https://github.com">Logout</a></li>
                  
                </ul>
          </div>
        </div>
      </nav>
    );
}




export default Nav;
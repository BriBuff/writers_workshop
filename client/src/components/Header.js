import React from "react";
// import { Link } from "react-router-dom";

function Header (props) {
    return(

        <header className="hdr" id="header">
    <div className="container">
        <div className="row">
            <div className="col-md-10">
                <h1><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>  Dashboard    <small>Manage Your Work</small></h1>
            </div>
            <div className="col-md-2">
                    
            </div>
        </div>
    </div>
</header>
    );
    
}



export default Header;
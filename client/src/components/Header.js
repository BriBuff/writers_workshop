import React from "react";

function Header (props) {
    return(

        <header className="hdr" id="header">
    <div className="container">
        <div className="row">
            <div className="col-md-10">
                <h1><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>  Dashboard    <small>Manage Your Work</small></h1>
            </div>
            <div className="col-md-2">
                    
                    <div className="dropdown create">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Create Content
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="https://github.com" type="button" data-toggle="modal" data-target="#addPage" onClick={props.click}>Add Page</a></li>
                         <li><a href="https://github.com" onClick={props.click}>Add Post</a></li>
                        <li><a href="https://github.com"onClick={props.click}>Add User</a></li> 
                      </ul>
                    </div>
            </div>
        </div>
    </div>
</header>
    );
    
}



export default Header;
import React from "react";


function Login(props){
    return(

        <section id="main">
          <nav className="navbar navbar-default ">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
           <div className ="active"  aria-hidden="true">Writer's Workshop</div> 
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              </ul>
            
          </div>
        </div>
      </nav>
        <div className="container">
      
            <div className="row">
                
                <div className="col-md-4 col-md-offset-4">
                  <form id="login" action="index.html" className="well">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="loginName" className="form-control" placeholder="Enter Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"></input>
                      </div>
                      <button onClick={() => props.login(this.loginName)} type="submit" className="btn btn-default btn-block">Login</button>
                  </form>
                              
                </div>
            </div>
        </div>
        <div style={{height: "200px"}}></div>
    </section>
    
    );
}

export default Login;
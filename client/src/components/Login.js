import React from "react";

// class Login extends React.Component {

//   state={
//     name: "",
//     email: "",
//     password: ""
//   }

//   render(){
//     return(

//       <section id="main">
//       <div className="container">
//           <div className="row">
              
//               <div className="col-md-4 col-md-offset-4">
//                 <form id="login" action="index.html" className="well">
//                   <div className="form-group">
//                     <label>Email Address</label>
//                     <input type="text" className="form-control" placeholder="Enter Email"></input>
//                   </div>
//                   <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" className="form-control" placeholder="Password"></input>
//                     </div>
//                     <button type="submit" className="btn btn-default btn-block">Login</button>
//                 </form>
                            
//               </div>
//           </div>
//       </div>
//   </section>
//   );
//   }
// }


function Login(props){
    return(

        <section id="main">
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
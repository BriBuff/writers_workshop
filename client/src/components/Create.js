import React, { Component } from "react";
import "./Login.css";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Middle from "./Middle";
const axios = require("axios");


class Create extends Component{

    state={
        title: "",
        body: "",
        userID: "",
        userDone: false
       
        
    }
    componentDidMount(){
        this.setState({userID: this.props.userID});
      }
    

    saveProject =(event)=>{
      
      event.preventDefault();
      const input = document.querySelectorAll("input, textarea");
      console.log(event.target.childNodes);
      console.log(input[0].value);
      const input1 = input[0].value;
      const input2 = input[1].value;
      
        axios.post("/create/"+ this.state.userID,{title: input1, body: input2}).then(res=> 
       this.setState({userDone: true})).catch(err=>console.log(err));
      }

    render(){
        
     if(this.state.userDone === true){
       return <Middle userID={this.state.userID}/>
     }
    
        return(
    
          <section id="main">
            <Nav/>
            <Header/>
          <div className="container">
        
              <div className="row">
                  

                  <div className="col-md-8">
                  <form id="create" method="POST" className="well" onSubmit={(event)=> (this.saveProject(event))}>
                    
                      <div className="form-group">
                      
                        <label>Title of Project</label>
                        <input 
                        type="text" 
                        name="title" 
                        className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                          <label>Body of Project</label>

                          <textarea
                          id="tinytextarea"
                          type="text" 
                          style={{height: 500,
                          width: 700}}
                          name="body"
                          className="form-control"  
                          placeholder=""
                          ></textarea>
                        </div>
                        <button  type="submit" className="btn btn-secondary btn-block">Create Project</button>
                        
    
    
                    </form>
                                
                  </div>
              </div>
          </div>
          {/* <Footer/> */}
      </section>
      
      );
      }

}

export default Create;
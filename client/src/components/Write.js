import React from "react";


function Write (props){
  
return(
    <section className="write">
    <h1>Write</h1>
    <button style={{marginBottom:"5px"}}><a href="/s">Save</a></button>
    
  <form method="post">
    <textarea  style={{ width: 600, height: 700}} value = {props.body} id="mytextarea"></textarea>
    
    
  </form>
  </section>
);
}

export default Write;
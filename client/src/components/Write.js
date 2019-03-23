import React from "react";


function Write (){
return(
    <section className="write">
    <div className="col-md-6">
    <h1>Write</h1>
  <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
    <button name="submitbtn"></button>
  </form>
  </div>
  </section>
);
}

export default Write;
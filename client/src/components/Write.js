import React from "react";


function Write (){
return(
    <section className="write">
    <h1>Write</h1>
  <form method="post">
    <textarea  style={{ width: 600, height: 700}} id="mytextarea">Hello, World!</textarea>
    <button name="submitbtn"></button>
  </form>
  </section>
);
}

export default Write;
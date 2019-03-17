import React from "react";


function Nav (){
    return(
        <nav style={navStyle} className="Nav" >
        <ul style={ulStyle}  >
        <li style={liStyle}>
        <a style={aStyle} href="/">
            <h3>WRITER'S WORKSHOP</h3></a>
        </li>
       <li style={liStyle}>
           <a style={aStyle} href="/"><p>Logged in as </p> </a>
       </li>
        
        </ul>
        </nav>
    );
}



const navStyle = {
    
    position:"fixed",
    width:"100%",
    zIndex:"3",
    color: "#fff",
    textAlign: "left",
    backgroundColor: "#808080",
    boxShadow: "0 14px 28px #202020",
    border: "solid #A9A9A9 3px",
    paddingLeft: "20px"
    
}
const ulStyle = {
    listStyleType: "none",
   
}
const liStyle = {

    display: "inline-block",
    paddingLeft: "120px"
}
const aStyle = {
    textDecoration: "none",
    margin: "0",
    padding: "0",
    marginLeft: "-300px"
}



export default Nav;
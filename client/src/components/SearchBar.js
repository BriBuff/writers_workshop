import React from "react";

function SearchBar (props){
    return(

        <div style={searchStyle}className="searchBar">
            <h3>Search Your Work</h3>
            <input style={inputStyle}className="input" placeholder="enter work here"></input>
            <button style={butStyle}  onClick={props.search}> Search </button>

        </div>

    );
}
const searchStyle ={
    // color: "white",
    height: "150px",
    width: "94%",
    marginTop:"100px",
    position:"absolute",
    textAlign:"left",
    border: "solid #A9A9A9 5px",
    marginLeft:"30px",
    paddingLeft: "20px",
    background: "#2c323c",
    color: "white",
    borderRadius: "5px"
    
}
const inputStyle = {
    width: "90%",
    height: "20px"
}

const butStyle={
    marginLeft: "20px"
    
    
}

export default SearchBar;
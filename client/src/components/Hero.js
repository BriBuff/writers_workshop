import React from "react";

function Hero () {
    return(
        <div style={heroStyle} className="Hero">
            <div className="insideHero">
                <h2>Welcome to Writer's Workshop</h2>
                <p>Search and Save Books You Write</p>
            </div>
        </div>

    );
}

const heroStyle = {
    
    height: "150px",
    width: "95%",
    paddingTop:"10px",
    paddingBottom: "10px",
    marginTop: "110px",
    marginLeft:"30px",
    borderRadius: "5px",
    
    contentAlign: "center",
    background: "#C0C0C0",
    color: "white",
    textAlign:"center",
    fontSize:"1.5rem",
    border: "solid #A9A9A9 5px",
    position:"absolute",
    
}

export default Hero;
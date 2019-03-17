import React from "react";


function Results (){
    return(
        <div style={resultStyle} className="results">
            <section style={resultsSection}className="resultsSection">
            <form style={planSec} className="planSec">
            
                
                <div className="dropdown">
                <button className="dropbtn">My current Work</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <section style={insideLeftSec} className="insidePlanSec">
                    
                    
                    <h2><strong>Plan</strong></h2>
                    <p>Lorem ipsusm lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>

                </section>
            </form>
            <form style={writeSec} className="writeSec">
            
                <h2>Write Section</h2>
               
                
                <section style={insideRightSec} className="insideWriteSec">

                </section>
            </form>

            </section>
            
        </div>
    );
}


const resultStyle = {
    position:"absolute",
    width: "94%",
    height:"900px",
    marginTop: "150px",
    border: "solid #A9A9A9 5px",
    background: "#2c323c",
    color: "white",
    marginLeft:"30px",
    paddingLeft: "20px",
    borderRadius: "5px"
}
const resultsSection={
    
    display: "flex",
    width: "1520px",
    marginTop: "10px",
    height:"800px",
    background: "white",
    borderRadius: "5px"
    
}
const planSec={
    float: "left",
    width: "50%",
    color: "#000000",
    background: "##DEB887",
    borderRadius: "5px"
}
const writeSec={
    float: "left",
    width: "50%",
    color:"#000000",
    background: "#FFEBCD",
    borderRadius: "5px"
}

const insideLeftSec={
    background: "#696969",
    width: "740px",
    height:"720px",
    marginLeft: "10px",
    borderRadius: "5px",
    
    
}
const insideRightSec={
    background: "#696969",
    width: "740px",
    height:"720px",
    marginLeft: "10px",
    borderRadius: "5px",
    
    
}

export default Results;
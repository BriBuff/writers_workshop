import React from "react";

function Footer(){
    return(
        <div style={footerStyle}className="footer">
            <h1>footer</h1>
        </div>
        
    );
}

const footerStyle = {
  position:"absolute",
  marginTop: "1000px",
  backgroundColor: "#808080",
  color:"white",
  border: "solid #A9A9A9 3px",
  height: "60px",
  width: "100%",
  boxShadow: "0 14px 28px #202020 ",

}
export default Footer;
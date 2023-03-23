import React from "react";
import logo from "../logo.svg";

export default function Footer(){
  
  const footerStyles = {
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    margin: "auto"
  }
  
  return (
    <>
      <div style={footerStyles}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  )
}
import React from "react";
import logo from "../logo.svg";

export default function Footer(){
  
  const footerStyles = {
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
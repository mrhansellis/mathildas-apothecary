import React from "react";
import mathilda from "../img/mathilda.png";

export default function Header(){

  const headerStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Bookman, URW Bookman L, serif",
    textAlign: "center",
  }

  return (
    <>
      <div stlye={headerStyles}>
        <h1>Mathilda's Apothecary</h1>
        <img src={mathilda} alt="mathilda the apothecary examines some herbs in her crowded apothecary shop" width="250" />
      </div>
    </>
  )

}
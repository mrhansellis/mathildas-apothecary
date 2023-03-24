import React from "react";
import PropTypes from "prop-types";

export default function Reagent(props) {
  const reagentStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Trattatello",
    textAlign: "center"
  }

  return (
    <>
      <div style={reagentStyles}>
        <h3>{props.reagent}</h3>
        <h4>Origin: {props.origin}</h4>
      </div>
    </>
  )
}

Reagent.propTypes = {
  reagent: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
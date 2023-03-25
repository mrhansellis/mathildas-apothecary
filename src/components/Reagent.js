import React from "react";
import PropTypes from "prop-types";

export default function Reagent(props) {
  const reagentStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Trattatello",
    textAlign: "center"
  }

  let quantityWarn = null
  if (props.quantity < 1) {
    quantityWarn = <p color="red">Sold Out!</p>
  } else if (props.quantity < 10) {
    quantityWarn = <p>Low Stock</p>
  }

  return (
    <>
      <div style={reagentStyles} onClick = {() => props.whenReagentClicked(props.id)}>
        <h3>{props.reagent}</h3>
        <h4>Origin: {props.origin}</h4>
        <h4>Quantity: {props.quantity}</h4>
        {quantityWarn}
      </div>
    </>
  )
}

Reagent.propTypes = {
  reagent: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenReagentClicked: PropTypes.func,
}
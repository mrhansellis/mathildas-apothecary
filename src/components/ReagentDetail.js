import React from "react";
import PropTypes from "prop-types";

export default function ReagentDetail(props) {
  const { reagent } = props;

  const detailStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Trattatello",
    textAlign: "center"
  }

  return (
    <>
      <div style={detailStyles} onClick = {() => props.onReagentDetailClick()}>
        <h1>Reagent Details</h1>
        <hr />
        <h3>{reagent.reagent}</h3>
        <h4>Origin: {reagent.origin}</h4>
        <h4>Price: {reagent.price}</h4>
        <h4>Quantity: {reagent.quantity}</h4>
      </div>
    </>
  );
}

ReagentDetail.propTypes = {
  reagent: PropTypes.object
};
import React from "react";
import PropTypes from "prop-types";

export default function ReagentDetail(props) {
  const { reagent, onClickingDelete, onReducingQuantity } = props;

  const detailStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Trattatello",
    textAlign: "center"
  }
  
  return (
    <>
      <div style={detailStyles} onClick = {() => props.onReagentDetailClick()}>
        <h1>{reagent.reagent}</h1>
        <hr />
        <h4>Origin: {reagent.origin}</h4>
        <h4>Price: {reagent.price}</h4>
        <h4>Quantity: {reagent.quantity}</h4>
      </div>
      <div style={detailStyles}>
        <button onClick={() => onReducingQuantity(reagent)}>Sell One Item</button>
        <button onClick={() => onClickingDelete(reagent.id)}>Remove From Inventory</button>
        <button onClick={props.onClickingEdit}>Edit Reagent Details</button>
      </div>
    </>
  );
}

ReagentDetail.propTypes = {
  reagent: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onReducingQuantity: PropTypes.func
};
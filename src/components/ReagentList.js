import React from "react";
import Reagent from "./Reagent";
import PropTypes from "prop-types";

export default function ReagentList(props) {

  const listStyles = {
    backgroundColor: "#F6F6F6",
    fontFamily: "Trattatello",
    textAlign: "center"
  }

  return (
    <>
      <div style={listStyles}>
        {props.reagentList.map((reagent) =>
        
        <Reagent 
        reagent={reagent.reagent}
        origin={reagent.origin}
        price={reagent.price}
        quantity={reagent.quantity}
        key={reagent.id}
        id={reagent.id} />
        )}
      </div>
    </>
  );
}

ReagentList.propTypes = {
  reagentList: PropTypes.array
};
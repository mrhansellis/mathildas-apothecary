import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditReagentForm(props) {
  const { reagent } = props;

  function handleEditReagentFormSubmission(e) {
    e.preventDefault();
    props.onEditReagent({reagent: e.target.reagent.value, origin: e.target.origin.value, price: e.target.price.value, quantity: reagent.quantity, id: reagent.id});
  }
  
  
  return (
    <>
    <ReusableForm
      formSubmissionHandler={handleEditReagentFormSubmission}
      buttonText={"Update Details"} />
    </>
  );
}

EditReagentForm.propTypes = {
  reagent: PropTypes.object,
  onEditReagent: PropTypes.func
};
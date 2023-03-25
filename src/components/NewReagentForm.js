import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

export default function NewReagentForm(props) {

  function handleNewReagentFormSubmission(e) {
    e.preventDefault();
    props.onNewReagentCreation({
      reagent: e.target.reagent.value,
      origin: e.target.origin.value,
      price: e.target.price.value,
      quantity: 25,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewReagentFormSubmission}
        buttonText="Add Reagent" />
    </>
  );
}

NewReagentForm.propTypes = {
  onNewReagentCreation: PropTypes.func
};
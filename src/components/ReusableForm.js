import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="reagent"
          placeholder="Reagent" />
        <input
          type="text"
          name="origin"
          placeholder="Origin" />
        <input
          type="int"
          name="price"
          placeholder="Price(sheckles)" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
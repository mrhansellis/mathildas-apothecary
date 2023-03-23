import React from "react";
import NewReagentForm from "./NewReagentForm";
import ReagentList from "./ReagentList";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewReagentForm />
      buttonText = "Return to Reagent List"
    } else {
    currentlyVisibleState = <ReagentList />
    buttonText = "Add Reagent";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default InventoryControl;
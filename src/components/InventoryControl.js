import React from "react";
import NewReagentForm from "./NewReagentForm";
import ReagentList from "./ReagentList";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainReagentList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewReagentToList = (newReagent) => {
    const newMainReagentList = this.state.mainReagentList.concat(newReagent);
    this.setState({mainReagentList: newMainReagentList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewReagentForm onNewReagentCreation={this.handleAddingNewReagentToList} />
      buttonText = "Return to Reagent List"
    } else {
    currentlyVisibleState = <ReagentList reagentList={this.state.mainReagentList} />
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
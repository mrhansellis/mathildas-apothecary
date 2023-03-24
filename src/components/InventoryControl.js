import React from "react";
import NewReagentForm from "./NewReagentForm";
import ReagentList from "./ReagentList";
import ReagentDetail from "./ReagentDetail";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainReagentList: [],
      selectedReagent: null
    };
  }

  handleClick = () => {
    
    if (this.state.selectedReagent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedReagent: null
      });
      } else {    
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewReagentToList = (newReagent) => {
    const newMainReagentList = this.state.mainReagentList.concat(newReagent);
    this.setState({mainReagentList: newMainReagentList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedReagent = (id) => {
    const selectedReagent = this.state.mainReagentList.filter(reagent => reagent.id === id)[0];
    this.setState({selectedReagent: selectedReagent});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedReagent != null) {
      currentlyVisibleState = <ReagentDetail reagent = {this.state.selectedReagent} />
      buttonText = "Return to Reagent List";
    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewReagentForm onNewReagentCreation={this.handleAddingNewReagentToList} />
      buttonText = "Return to Reagent List"
    } else {
    currentlyVisibleState = <ReagentList reagentList={this.state.mainReagentList} onReagentSelection={this.handleChangingSelectedReagent} />
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
import React from "react";
import NewReagentForm from "./NewReagentForm";
import ReagentList from "./ReagentList";
import ReagentDetail from "./ReagentDetail";
import EditReagentForm from "./EditReagentForm"

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainReagentList: [],
      selectedReagent: null,
      editing: false
    };
  }

  handleClick = () => {
    
    if (this.state.selectedReagent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedReagent: null,
        editing: false
      });
      } else {    
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleReagentDetailClick = () => {
    console.log("I've been clicked");
    this.setState({
      selectedReagent: null
    });
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

  handleDeletingReagent = (id) => {
    const newMainReagentList = this.state.mainReagentList.filter(reagent => reagent.id !== id);
    this.setState({
      mainReagentList: newMainReagentList,
      selectedReagent: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingReagentInList = (reagentToEdit) => {
    const editedMainReagentList = this.state.mainReagentList
      .filter(reagent => reagent.id !== this.state.selectedReagent.id)
      .concat(reagentToEdit);
    this.setState({
      mainReagentList: editedMainReagentList,
      editing: false,
      selectedReagent: null
    });
  }

  handleReducingQuantity = (reagentToReduce) => {
    if (reagentToReduce.quantity >= 1) {
      const reducedReagent = { ...reagentToReduce, quantity: reagentToReduce.quantity - 1 }
      const reducedMainReagentList = this.state.mainReagentList
      .filter(reagent => reagent.id !== this.state.selectedReagent.id)
      .concat(reducedReagent);
      this.setState({
        mainReagentList: reducedMainReagentList,
        selectedReagent: null
      });
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditReagentForm
                              reagent = {this.state.selectedReagent}
                              onEditReagent = {this.handleEditingReagentInList} />
      buttonText = "Return to Inventory";
    } else if (this.state.selectedReagent != null) {
      currentlyVisibleState = <ReagentDetail 
                              reagent = {this.state.selectedReagent}
                              onClickingDelete={this.handleDeletingReagent}
                              onReagentDetailClick={this.handleReagentDetailClick}
                              onClickingEdit = {this.handleEditClick}
                              onReducingQuantity = {this.handleReducingQuantity} />
      buttonText = "Return to Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewReagentForm
      onNewReagentCreation={this.handleAddingNewReagentToList} />
      buttonText = "Return to Inventory"
    } else {
    currentlyVisibleState = <ReagentList
                            reagentList={this.state.mainReagentList}
                            onReagentSelection={this.handleChangingSelectedReagent} />
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
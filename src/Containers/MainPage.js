import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import DisplayCounter from "../Components/DisplayCounter/DisplayCounter";
import ChangeCounter from "../Components/ChangeCounter/ChangeCounter";
class MainPage extends Component {
  render() {
    return (
      <div>
        <DisplayCounter value={this.props.cnt} />
        <ChangeCounter label="Increment" click={this.props.onIncrement} />
        <ChangeCounter label="Decrement" click={this.props.onDecrement} />
        <ChangeCounter label="Add 5" click={this.props.onAddCounter} />
        <ChangeCounter label="Subtract 5" click={this.props.onSubCounter} />
        <br />

        <button onClick={() => this.props.storeResults(this.props.cnt)}>
          Store results
        </button>
        <ul>
          {this.props.results.map((storeResult, index) => (
            <li onClick={() => this.props.deleteResult(index)} key={index}>
              {storeResult} Delete
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cnt: state.CR.counter,
    results: state.RES.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT, value: 1 }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT, value: 1 }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    storeResults: cnt => {
      dispatch({ type: actionTypes.STORE_RESULT, value: cnt });
    },
    deleteResult: index => {
      dispatch({
        type: actionTypes.DELETE_RESULT,
        value: index
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

//export default MainPage;

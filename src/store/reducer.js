/* import * as actionTypes from "../store/actions";

const initialState = { counter: 0, results: [] };
const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    // state.counter=state.counter+1;
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === actionTypes.ADD) {
    //   state.counter=state.counter+action.value;
    return {
      ...state,
      counter: state.counter + action.value
    };
  } else if (action.type === actionTypes.DECREMENT) {
    // state.counter=state.counter+1;
    return {
      ...state,
      counter: state.counter - 1
    };
  } else if (action.type === actionTypes.SUBTRACT) {
    //   state.counter=state.counter+action.value;
    return {
      ...state,
      counter: state.counter - action.value
    };
  } else if (action.type === actionTypes.STORE_RESULT) {
    //   state.counter=state.counter+action.value;
    return {
      ...state,
      results: state.results.concat(state.counter)
    };
  } else if (action.type === actionTypes.DELETE_RESULT) {
    console.log("Before=====", state.results);

    console.log("After====", state.results);

    return { ...state, results: state.results.splice(action.value, 1) }; //state.results
  }

  return state;
};

export default reducer;
 */
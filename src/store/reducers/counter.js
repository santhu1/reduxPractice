import * as actionTypes from "../../store/actions";

const initialState = { counter: 0};
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
  }

  return state;
};

export default reducer;

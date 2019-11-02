import * as actionTypes from "../../store/actions";

const initialState = { results: [] };
const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    //   state.counter=state.counter+action.value;
    return {
      ...state,
      results: state.results.concat(action.value)
    };
  } else if (action.type === actionTypes.DELETE_RESULT) {
    var outputArr = state.results.filter(
      (result, index) => index !== action.value && result
    );

    return { ...state, results: outputArr }; //state.results
  }

  return state;
};

export default reducer;

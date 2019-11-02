const redux = require("redux");
const createStore = redux.createStore;
const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // state.counter=state.counter+1;
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD") {
    //   state.counter=state.counter+action.value;

    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === "SUB") {
    // state.counter=state.counter+1;
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === "DECREMENT") {
    //   state.counter=state.counter+action.value;
    return {
      ...state,
      counter: state.counter - action.value
    };
  }

  return state;
};

const store = createStore(reducer);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "ADD", value: 5 });
console.log(store.getState());

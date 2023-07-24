import { createStore } from 'redux';

// Define the initial state
const initialState = {
  // Add your initial state properties here
  // For example:
  user: null,
};

// Define your reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your actions and update the state accordingly
    // For example:
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;
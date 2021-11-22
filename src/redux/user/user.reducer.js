import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
}; //the first time action triggers we dont have the state so we initialize it as null so reducer take the default value as null

const userReducer = (state = INITIAL_STATE, action) => {
  //we give default value in state if nothing was passed initially
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

//state is ahere a initial state or previous state and action is a object which a component triggers and goes to useReducer function. if the type matched then it update the state and returnd it. Its not necessary that everytime action trigger it should update becaust the type might not match at that time.

import { SET_CURRENT_USER, SET_CURRENT_USER_ROLE, } from "./ActionType";

const INITIAL_STATE = {
  currentUser: null,
  currentUserRole: null, //admin:1, user:2
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  } if (action.type === SET_CURRENT_USER_ROLE) {
    return {
      ...state,
      currentUserRole: action.payload,
    };
  }
   else {
    return {
      ...state,
    };
  }
};
